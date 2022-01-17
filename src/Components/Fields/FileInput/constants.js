import Icon from "@/Components/Icon"
import { avi } from "./Icons/FilesIcons/avi"
import { doc } from "./Icons/FilesIcons/doc"
import { docx } from "./Icons/FilesIcons/docx"
import { eml } from "./Icons/FilesIcons/eml"
import { html } from "./Icons/FilesIcons/html"
import { jpg } from "./Icons/FilesIcons/jpg"
import { mpg4 } from "./Icons/FilesIcons/mpg4"
import { png } from "./Icons/FilesIcons/png"
import { pptx } from "./Icons/FilesIcons/pptx"
import { rar } from "./Icons/FilesIcons/rar"
import { SevenZip } from "./Icons/FilesIcons/SevenZip"
import { svg } from "./Icons/FilesIcons/svg"
import { pdf } from "./Icons/FilesIcons/pdf"
import { ppt } from "./Icons/FilesIcons/ppt"
import { xlsx } from "./Icons/FilesIcons/xlsx"
import { txt } from "./Icons/FilesIcons/txt"
import { wmv } from "./Icons/FilesIcons/wmv"
import { xls } from "./Icons/FilesIcons/xls"
import { zip } from "./Icons/FilesIcons/zip"
import { file } from "./Icons/FilesIcons/file"
import { mp4 } from "./Icons/FilesIcons/mp4"
import { gif } from "./Icons/FilesIcons/gif"

export const fileIcons = {
  avi: Icon(avi),
  doc: Icon(doc),
  docx: Icon(docx),
  eml: Icon(eml),
  html: Icon(html),
  jpg: Icon(jpg),
  mpg4: Icon(mpg4),
  mp4: Icon(mp4),
  gif: Icon(gif),
  png: Icon(png),
  pptx: Icon(pptx),
  rar: Icon(rar),
  "7zip": Icon(SevenZip),
  svg: Icon(svg),
  txt: Icon(txt),
  wmv: Icon(wmv),
  xls: Icon(xls),
  zip: Icon(zip),
  pdf: Icon(pdf),
  ppt: Icon(ppt),
  xlsx: Icon(xlsx),
}
export const defaultIcon = Icon(file)

export const unAllowedMimeTypes = [
  /\.ade$/,
  /\.adp$/,
  /\.apk$/,
  /\.bat$/,
  /\.chm$/,
  /\.cmd$/,
  /\.com$/,
  /\.cpl$/,
  /\.dll$/,
  /\.dmg$/,
  /\.exe$/,
  /\.hta$/,
  /\.ins$/,
  /\.isp$/,
  /\.iso$/,
  /\.jar$/,
  /\.js$/,
  /\.jse$/,
  /\.lib$/,
  /\.lnk$/,
  /\.mde$/,
  /\.msc$/,
  /\.msi$/,
  /\.msp$/,
  /\.mst$/,
  /\.nsh$/,
  /\.pif$/,
  /\.scr$/,
  /\.sct$/,
  /\.shb$/,
  /\.sys$/,
  /\.vb$/,
  /\.vbe$/,
  /\.vbs$/,
  /\.vxd$/,
  /\.wsc$/,
  /\.wsf$/,
  /\.wsh$/,
  /\.cab$/,
  /\.ADE$/,
  /\.ADP$/,
  /\.APK$/,
  /\.BAT$/,
  /\.CHM$/,
  /\.CMD$/,
  /\.COM$/,
  /\.CPL$/,
  /\.DLL$/,
  /\.DMG$/,
  /\.EXE$/,
  /\.HTA$/,
  /\.INS$/,
  /\.ISP$/,
  /\.ISO$/,
  /\.JAR$/,
  /\.JSJS/,
  /\.JSE$/,
  /\.LIB$/,
  /\.LNK$/,
  /\.MDE$/,
  /\.MSC$/,
  /\.MSI$/,
  /\.MSP$/,
  /\.MST$/,
  /\.NSH$/,
  /\.PIF$/,
  /\.SCR$/,
  /\.SCT$/,
  /\.SHB$/,
  /\.SYS$/,
  /\.VB$/,
  /\.VBE$/,
  /\.VBS$/,
  /\.VXD$/,
  /\.WSC$/,
  /\.WSF$/,
  /\.WSH$/,
  /\.CAB$/
]
