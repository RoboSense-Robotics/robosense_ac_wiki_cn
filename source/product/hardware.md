# 硬件生态
## 计算平台

下表列举了一些和 Active Camera 匹配的计算平台，罗列了它们支持的 SDK 应用和系统镜像，这些系统镜像包含了编译和运行所支持的 SDK 需要的依赖。

<table class="docutils align-default">
    <tr class="row-even">
        <th colspan="2">计算平台</th>
        <th>通用 X86 架构计算机</th>
        <th>Radxa ROCK5B+</th>
        <th>OrangePi 5 Ultra</th>
        <th>NVIDIA Jetson Orin Nano Super</th>
        <th>D-Robotics RDK X5</th>
    </tr>
    <tr class="row-odd" style="text-align: center; vertical-align: middle;">
        <td colspan="2">SOC</td>
        <td>-</td>
        <td>Rockchip RK3588</td>
        <td>Rockchip RK3588</td>
        <td>Jetson Orin Nano 8GB module</td>
        <td>Sunrise 5</td>
    </tr>
    <tr class="row-even" style="text-align: center; vertical-align: middle;">
        <td colspan="2">CPU</td>
        <td>Intel® Xeon(R)<br> Gold 6230R CPU @<br> 2.10GHz x 104</td>
        <td>8 核 64 位处理器<br> 4 个 Cortex-A76@2.4GHz<br> 4 个 Cortex-A55@1.8GHz</td>
        <td>8 核 64 位处理器<br> 4 个 Cortex-A76@2.4GHz<br> 4 个 Cortex-A55@1.8GHz</td>
        <td>6 个 Cortex-A78@2.4GHz</td>
        <td>8 个 Cortex-A55@1.5GHz</td>
    </tr>
    <tr class="row-odd" style="text-align: center; vertical-align: middle;">
        <td colspan="2">内存</td>
        <td>64 GB</td>
        <td>16 GB LPDDR5</td>
        <td>16 GB LPDDR5</td>
        <td>8 GB LPDDR5</td>
        <td>8 GB LPDDR4</td>
    </tr>
    <tr class="row-even" style="text-align: center; vertical-align: middle;">
        <td colspan="2">AI 算力</td>
        <td>NVIDIA A40<br> (299.3 TOPS@INT8)</td>
        <td>6 TOPS@INT8</td>
        <td>6 TOPS@INT8</td>
        <td>67 TOPS@INT8</td>
        <td>10 TOPS@INT8</td>
    </tr>
    <tr style="text-align: center; vertical-align: middle;">
        <td rowspan="11">支持的 SDK <sup>1</sup> </td>
        <td>驱动</td>
        <td>●</td>
        <td>●</td>
        <td>○</td>
        <td>○</td>
        <td>○</td>
    </tr>
    <tr style="text-align: center; vertical-align: middle;">
        <td>采集</td>
        <td>●</td>
        <td>●</td>
        <td>○</td>
        <td>○</td>
        <td>○</td>
    </tr>
    <tr style="text-align: center; vertical-align: middle;">
        <td>监控</td>
        <td>●</td>
        <td>●</td>
        <td>○</td>
        <td>○</td>
        <td>○</td>
    </tr>
    <tr style="text-align: center; vertical-align: middle;">
        <td>标定</td>
        <td>●</td>
        <td>●</td>
        <td>○</td>
        <td>○</td>
        <td>○</td>
    </tr>
    <tr style="text-align: center; vertical-align: middle;">
        <td>点云与视觉融合</td>
        <td>●</td>
        <td>●</td>
        <td>○</td>
        <td>○</td>
        <td>○</td>
    </tr>
    <tr style="text-align: center; vertical-align: middle;">
        <td>定位</td>
        <td>●</td>
        <td>●</td>
        <td>○</td>
        <td>○</td>
        <td>○</td>
    </tr>
    <tr style="text-align: center; vertical-align: middle;">
        <td>slam</td>
        <td>●</td>
        <td>●</td>
        <td>○</td>
        <td>○</td>
        <td>○</td>
    </tr>
    <tr style="text-align: center; vertical-align: middle;">
        <td>3D 高斯溅射</td>
        <td>●</td>
        <td>○</td>
        <td>○</td>
        <td>○</td>
        <td>○</td>
    </tr>
    <tr style="text-align: center; vertical-align: middle;">
        <td>稠密深度估计</td>
        <td>●</td>
        <td>●</td>
        <td>○</td>
        <td>○</td>
        <td>○</td>
    </tr>
    <tr style="text-align: center; vertical-align: middle;">
        <td>目标检测与识别</td>
        <td>●</td>
        <td>●</td>
        <td>○</td>
        <td>○</td>
        <td>○</td>
    </tr>
    <tr style="text-align: center; vertical-align: middle;">
        <td>语义分割</td>
        <td>●</td>
        <td>●</td>
        <td>○</td>
        <td>○</td>
        <td>○</td>
    </tr>
    <tr style="text-align: center; vertical-align: middle;">
        <td colspan="2">SDK 环境容器 <sup>2</sup> </td>
        <td>
            <a href="https://github.com/RoboSense-Robotics/ros2_ac_sdk_infra/tree/main/tools/cross_compilation">
                AC X86 tool
            </a>
        </td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
    </tr>
</table>

[1] ● 和 ○ 分别代表支持（实心圆）和不支持（空心圆）。

[2] 用于管理 Active Camera SDK 的跨平台编译和本地编译环境的 Docker 容器。包含了容器管理、镜像管理以及自动化环境设置等功能。
