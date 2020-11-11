#!D:\Program\Python\Python37\python.exe
# -*- coding: utf-8 -*-
import os
import cgi
import sys
import locale
import codecs


# 標準輸入編碼
stdinEncoding = sys.stdin.encoding
# 標準輸出編碼
stdoutEncoding = sys.stdout.encoding
# 本地化編碼資訊
localeEncodes = locale.getdefaultlocale()
# 系統預設編碼資訊
sysEncode = sys.getdefaultencoding()
# 檔案系統編碼
fileEncode = sys.getfilesystemencoding()

# 系統預設標準輸出編碼 ANSI(繁體中文 cp950)
# 指定標準輸出編碼 UTF-8
sys.stdout = codecs.getwriter("utf-8")(sys.stdout.detach())

# 回應內容型態 Content-Type
print('Content-Type: text/html; charset=utf-8\n')

# 回應內容
print('<html lang=\"%s\">' % (localeEncodes[0]))
print('<head>')
print('<meta charset=\"utf-8\">')
print('<title>HTML &lt;FORM&gt; 接收回應測試</title>')
print('<style>b { color: green; }</style>')
print('</head>')

print('<body>')
print('<h1>HTML &lt;FORM&gt; 接收回應測試</h1>')

print('<section>')
print('<b>standard I/O encoding</b>: (%s, %s)<br>' % (stdinEncoding, stdoutEncoding))
print('<b>locale default encoding</b>: (%s, %s)<br>' % (localeEncodes[0], localeEncodes[1]))
print('<b>system default encoding</b>: %s<br>' % (sysEncode))
print('<b>file system encoding</b>: %s<br>' % (fileEncode))
print('</section>')

print('<hr>')

# 透過原生CGI取得表單欄位儲存資料集合
form = cgi.FieldStorage()

# 輸出環境變數
if 'isPrintEnv' in form:
    if form['isPrintEnv'].value == 'on':
        print('<section>')
        print('<h2>伺服端環境變數</h2>')
        print('<ul>')
        for key in os.environ.keys():
            print('<li><b>%s</b>: %s</li>' % (key, os.environ[key]))
        print('</ul>')
        print('</h2>')


# 輸出客戶端傳送來的資料
# FieldStorage(key, filename, value)
print('<section>')
print('<h2>客戶端傳遞來的資料</h2>')
print('<ul>')
for key in form:
    item = form[key]
    if key.rfind('[]') > -1:
        print('<li>')
        print('<b>%s</b> = ' % (key))
        print('<ul>')
        if item[0].filename:
            i = 0
            for subItem in item:
                print('<li><b>[%d]</b> = %s</li>' % (i, subItem.filename))
                i = i + 1
        else:
            i = 0
            for subItem in item:
                print('<li><b>[%d]</b> = %s</li>' % (i, subItem.value))
                i = i + 1
        print('</ul>')
        print('</li>')
    else:
        if item.filename:
            print('<li><b>%s</b> = %s</li>' % (key, item.filename))
        else:
            print('<li><b>%s</b> = %s</li>' % (key, item.value))
print('</ul>')
print('</section>')


print('</body>')
print('</html>')