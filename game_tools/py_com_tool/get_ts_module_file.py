# -*- coding: utf-8 -*-  

import os
import re

name_map = {}
  
def createImportMap(file_dir):
    allNum = 0
    for root, dirs, files in os.walk(file_dir): 
        # print('"%s/*",'%root.replace("\\", "/").replace(file_dir, ""))
        for file in files:
            if os.path.splitext(file)[1] == '.ts': 
                allNum = allNum + 1

    writeFile = open("./import-map.json", "w")
    writeFile.write('{\n\t"imports": {\n')
    curNum = 0
    for root, dirs, files in os.walk(file_dir): 
        for file in files: 
            if os.path.splitext(file)[1] == '.ts':
                name_map[os.path.splitext(file)[0]] = True
                curNum = curNum + 1
                writeFile.write('\t\t"%s": "%s"%s\n'%(os.path.splitext(file)[0], os.path.join(root, file).replace("\\", "/"), [",", ""][allNum == curNum]))
    
    writeFile.write('\t}\n}')
    writeFile.close()
    

def changeFileImport(file_dir):
    for root, dirs, files in os.walk(file_dir): 
        for file in files: 
            if os.path.splitext(file)[1] == '.ts':
                print(os.path.join(root, file))
                curFile = open(os.path.join(root, file), mode='r+',encoding='utf-8')
                lines = curFile.readlines()
                needChange = False
                for i in range(0, len(lines)):
                    if re.search('import .* from', lines[i], flags=0):
                        lines[i] = lines[i].replace('\'', '"')
                        idxInfo = re.search('".+"', lines[i], flags=0).span()
                        mdName = re.sub('.+/', '', lines[i][idxInfo[0] + 1 : idxInfo[1] - 1])
                        if name_map.get(mdName, None):
                            needChange = True
                            lines[i] = re.sub('".+/', '"', lines[i])
                curFile.close()

                if needChange :
                    curFile = open(os.path.join(root, file), mode='w',encoding='utf-8')
                    curFile.writelines(lines)
                    curFile.close()


createImportMap("./assets/scripts/")

# changeFileImport("./assets/scripts")