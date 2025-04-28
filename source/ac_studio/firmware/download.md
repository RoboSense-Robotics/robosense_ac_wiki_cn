# 下载

## 固件下载

<table class="docutils align-default" style="width: 100%;">
    <tbody>
        <tr class="centered-table-text">
            <td style="font-weight: bold;">版本</td>
            <td style="font-weight: bold;">发布日期</td>
            <td style="font-weight: bold;">下载</td>
        </tr>
        <tr class="centered-table-text">
            <td>v0.0.5</td>
            <td>2025.4.25</td>
            <td>
                <a href="https://cdn.robosense.cn/AC_wiki/sw_ssd261q_ota_0.0.5.zip">
                    zip
                </a>
            </td>
        </tr>
    </tbody>
</table>

## R&D Viewer 下载

<table class="docutils align-default" style="width: 100%;">
    <tbody>
        <tr class="centered-table-text">
            <td style="font-weight: bold;">系统</td>
            <td style="font-weight: bold;">下载</td>
        </tr>
        <tr class="centered-table-text">
            <td>Ubuntu LTS 20.04 / 22.04</td>
            <td>
                <a href="https://cdn.robosense.cn/AC_wiki/AC1_ota_tool_x86_linux.zip">
                    Ubuntu
                </a>
            </td>
        </tr>
        <tr class="centered-table-text">
            <td>Windows 10/11</td>
            <td>
                <a href="https://cdn.robosense.cn/AC_wiki/AC1_ota_tool_x86_windows.zip">
                    Windows
                </a>
            </td>
        </tr>
    </tbody>
</table>

## R&D Viewer 安装与启动

### Ubuntu

- 安装
```bash
cd ac_rd_viewer_linux
sudo u+x driver/AC_usb_permission.sh # 只需在第一次运行
./AC_usb_permission.sh               # 只需在第一次运行  
```

- 运行
```bash
./run_viewer_exe.sh
```

### Windows

- 安装  
```bash
进入 driver 目录，双击运行 AC_driver_install.bat 安装驱动
```

- 运行  
```bash
双击 viewer.exe 运行
```
