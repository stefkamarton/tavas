import PIL.Image
img = PIL.Image.open('rezz.jpg')

import PIL.ExifTags
exif = {
    PIL.ExifTags.TAGS[k]: v
    for k, v in img._getexif().items()
    if k in PIL.ExifTags.TAGS
}

file = open('meta-datas.txt', 'w')
for e in exif:
    file.write(e + ' ' + str(exif[e]) + '\n')

file.close()