param(
  [Parameter(Mandatory = $true)]
  [string[]]$VideoPaths,
  [Parameter(Mandatory = $true)]
  [string]$OutputDirectory
)

Add-Type -AssemblyName System.Drawing
Add-Type -ReferencedAssemblies System.Drawing -TypeDefinition @"
using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.Runtime.InteropServices;

public static class ShellVideoThumbnail
{
    [StructLayout(LayoutKind.Sequential)]
    private struct SIZE
    {
        public int cx;
        public int cy;
    }

    [Flags]
    private enum SIIGBF
    {
        BIGGERSIZEOK = 0x1,
        THUMBNAILONLY = 0x8
    }

    [ComImport]
    [Guid("bcc18b79-ba16-442f-80c4-8a59c30c463b")]
    [InterfaceType(ComInterfaceType.InterfaceIsIUnknown)]
    private interface IShellItemImageFactory
    {
        void GetImage(SIZE size, SIIGBF flags, out IntPtr phbm);
    }

    [DllImport("shell32.dll", CharSet = CharSet.Unicode, PreserveSig = false)]
    private static extern void SHCreateItemFromParsingName(
        string path,
        IntPtr bindContext,
        ref Guid riid,
        [MarshalAs(UnmanagedType.Interface)] out IShellItemImageFactory imageFactory);

    [DllImport("gdi32.dll")]
    private static extern bool DeleteObject(IntPtr hObject);

    public static void Save(string videoPath, string outputPath, int width, int height)
    {
        var iid = new Guid("bcc18b79-ba16-442f-80c4-8a59c30c463b");
        IShellItemImageFactory factory;
        SHCreateItemFromParsingName(videoPath, IntPtr.Zero, ref iid, out factory);
        IntPtr bitmapHandle;
        factory.GetImage(new SIZE { cx = width, cy = height }, SIIGBF.BIGGERSIZEOK | SIIGBF.THUMBNAILONLY, out bitmapHandle);

        try
        {
            using (var bitmap = Bitmap.FromHbitmap(bitmapHandle))
            {
                bitmap.Save(outputPath, ImageFormat.Png);
            }
        }
        finally
        {
            DeleteObject(bitmapHandle);
            Marshal.FinalReleaseComObject(factory);
        }
    }
}
"@

New-Item -ItemType Directory -Path $OutputDirectory -Force | Out-Null

foreach ($videoPath in $VideoPaths) {
  $outputName = [System.IO.Path]::GetFileNameWithoutExtension($videoPath) + '.png'
  $outputPath = Join-Path $OutputDirectory $outputName
  [ShellVideoThumbnail]::Save($videoPath, $outputPath, 1280, 720)
  Get-Item -LiteralPath $outputPath | Select-Object FullName, Length
}
