# 硬件生态
## 计算平台

下表列举了一些和 Active Camera 匹配的计算平台，罗列了它们支持的 SDK 应用和系统镜像，这些系统镜像包含了编译和运行所支持的 SDK 需要的依赖。

<table class="docutils align-default">
    <tr class="centered-table-text">
        <td style="font-weight: bold;" colspan="2">计算平台名称</td>
        <td style="font-weight: bold;">通用 X86 架构计算机</td>
        <td style="font-weight: bold;">Radxa ROCK5B+</td>
        <td style="font-weight: bold;">OrangePi 5 Ultra</td>
        <td style="font-weight: bold;">NVIDIA Jetson Orin Nano Super</td>
        <td style="font-weight: bold;">NVIDIA Jetson AGX Orin</td>
        <td style="font-weight: bold;">D-Robotics RDK X5</td>
    </tr>
    <tr class="centered-table-text">
        <td colspan="2">SOC</td>
        <td>-</td>
        <td>Rockchip RK3588</td>
        <td>Rockchip RK3588</td>
        <td>Jetson Orin Nano 8GB module</td>
        <td>Jetson Orin</td>
        <td>Sunrise 5</td>
    </tr>
    <tr class="centered-table-text">
        <td colspan="2">CPU</td>
        <td>Intel® Xeon(R)<br> Gold 6230R CPU @<br> 2.10GHz x 104</td>
        <td>8 核 64 位处理器<br> 4 个 Cortex-A76@2.4GHz<br> 4 个 Cortex-A55@1.8GHz</td>
        <td>8 核 64 位处理器<br> 4 个 Cortex-A76@2.4GHz<br> 4 个 Cortex-A55@1.8GHz</td>
        <td>6 个 Cortex-A78@2.4GHz</td>
        <td>12 核 Cortex-A78AE@2.2GHz</td>
        <td>8 个 Cortex-A55@1.5GHz</td>
    </tr>
    <tr class="centered-table-text">
        <td colspan="2">内存</td>
        <td>64 GB</td>
        <td>16 GB LPDDR5</td>
        <td>16 GB LPDDR5</td>
        <td>8 GB LPDDR5</td>
        <td>64 GB LPDDR5</td>
        <td>8 GB LPDDR4</td>
    </tr>
    <tr class="centered-table-text">
        <td colspan="2">AI 算力</td>
        <td>NVIDIA A40<br> (299.3 TOPS@INT8)</td>
        <td>6 TOPS@INT8</td>
        <td>6 TOPS@INT8</td>
        <td>67 TOPS@INT8</td>
        <td>275 TOPS@INT8</td>
        <td>10 TOPS@INT8</td>
    </tr>
    <tr class="centered-table-text">
        <td rowspan="12">支持的 SDK <sup>1</sup> </td>
    </tr>
    <tr class="centered-table-text">
        <td>驱动</td>
        <td>●</td>
        <td>●</td>
        <td>●</td>
        <td>●</td>
        <td>●</td>
        <td>●</td>
    </tr>
    <tr class="centered-table-text">
        <td>采集</td>
        <td>●</td>
        <td>●</td>
        <td>●</td>
        <td>●</td>
        <td>●</td>
        <td>●</td>
    </tr>
    <tr class="centered-table-text">
        <td>监控</td>
        <td>●</td>
        <td>●</td>
        <td>●</td>
        <td>●</td>
        <td>●</td>
        <td>●</td>
    </tr>
    <tr class="centered-table-text">
        <td>标定</td>
        <td>●</td>
        <td>●</td>
        <td>●</td>
        <td>●</td>
        <td>●</td>
        <td>●</td>
    </tr>
    <tr class="centered-table-text">
        <td>点云与视觉融合</td>
        <td>●</td>
        <td>●</td>
        <td>●</td>
        <td>●</td>
        <td>●</td>
        <td>●</td>
    </tr>
    <tr class="centered-table-text">
        <td>定位</td>
        <td>●</td>
        <td>●</td>
        <td>●</td>
        <td>●</td>
        <td>●</td>
        <td>●</td>
    </tr>
    <tr class="centered-table-text">
        <td>slam</td>
        <td>●</td>
        <td>●</td>
        <td>●</td>
        <td>●</td>
        <td>●</td>
        <td>●</td>
    </tr>
    <tr class="centered-table-text">
        <td>3D 高斯溅射</td>
        <td>●</td>
        <td>○</td>
        <td>○</td>
        <td>○</td>
        <td>○</td>
        <td>○</td>
    </tr>
    <tr class="centered-table-text">
        <td>稠密深度估计</td>
        <td>●</td>
        <td>●</td>
        <td>●</td>
        <td>●</td>
        <td>●</td>
        <td>○</td>
    </tr>
    <tr class="centered-table-text">
        <td>目标检测与识别</td>
        <td>●</td>
        <td>●</td>
        <td>●</td>
        <td>●</td>
        <td>●</td>
        <td>●</td>
    </tr>
    <tr class="centered-table-text">
        <td>语义分割</td>
        <td>●</td>
        <td>●</td>
        <td>●</td>
        <td>●</td>
        <td>●</td>
        <td>●</td>
    </tr>
    <tr class="centered-table-text">
        <td colspan="2">系统镜像/SDK容器 <sup>2</sup> </td>
        <td>
            <a href="https://github.com/RoboSense-Robotics/robosense_ac_ros2_sdk_infra/tree/main/tools/compilation_envirment">
                SDK容器
            </a>
        </td>
        <td>
            <a href="https://github.com/RoboSense-Robotics/robosense_ac_ros2_sdk_infra/blob/main/tools/system_image/Radxa_Image_Readme_CN.md">
                系统镜像安装说明
            </a>
        </td>
        <td>-</td>
        <td>
            <a href="https://github.com/RoboSense-Robotics/robosense_ac_ros2_sdk_infra/blob/main/tools/system_image/Orin_Nano_Image_Readme_CN.md">
                系统镜像安装说明
            </a>
        </td>
        <td>-</td>
        <td>
            <a href="https://github.com/RoboSense-Robotics/robosense_ac_ros2_sdk_infra/blob/main/tools/system_image/RDK_X5_Image_Readme_CN.md">
                系统镜像安装说明
            </a>
        </td>
    </tr>
</table>

<sup>1</sup> ● 和 ○ 分别代表支持（实心圆）和不支持（空心圆）。

<sup>2</sup> Active Camera SDK在不同平台提供容器与系统镜像，其中SDK容器，提供跨平台编译和本地编译环境的 Docker 容器，包括容器管理、镜像管理以及自动化环境设置等功能；而系统镜像，则预安装了ros2 humble与SDK的三方依赖。
