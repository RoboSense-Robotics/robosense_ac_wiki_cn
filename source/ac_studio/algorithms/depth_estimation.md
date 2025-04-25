# 稠密深度估计  
输入单帧图像和点云，通过 PromptDA 算法生成基于图像分辨率的稠密深度图，以下展示了不同大小模型展现出来的效果。

## PromptDA-vitlarge
该网络目前支持的计算平台如下表所示：

<table class="docutils align-default" style="width: 100%;">
    <tbody>
        <tr class="row-even centered-table-text">
            <td rowspan="2">计算平台</td>
            <td>通用 X86 架构计算机</td>
            <td>Radxa ROCK5B+</td>
            <td>OrangePi 5 Ultra</td>
            <td>NVIDIA Jetson Orin Nano Super</td>
            <td>NVIDIA Jetson AGX Orin</td>
            <td>D-Robotics RDK X5</td>
        </tr>
        <tr class="row-odd centered-table-text">
            <td>●</td>
            <td>●</td>
            <td>●</td>
            <td>●</td>
            <td>●</td>
            <td>○</td>
        </tr>
        <tr class="row-even centered-table-text">
            <td>模型大小</td>
            <td colspan="6">1360M</td>
        </tr>
        <tr class="row-odd centered-table-text">
            <td>传感器</td>
            <td colspan="6">AC1</td>
        </tr>
    </tbody>
</table>

以下视频展示了该网络在支持的计算平台上对室内场景进行离线稠密深度估计演示效果。

<div style="margin-bottom: 24px; position:relative; width:100%; padding-top: 44.12%;" class="video-container">
    <iframe src="https://cdn.robosense.cn/AC_wiki/dense_depth_net_wiki.mp4" allowfullscreen style="position:absolute; top:0; left:0; width:100%; height:100%;"></iframe>
</div>

视频数据：[Library](https://cdn.robosense.cn/AC_wiki/dense_depth_net_demo.zip)  
详细代码：[AC1 Dense Depth vitlarge](https://github.com/RoboSense-Robotics/robosense_ac_perception)

## PromptDA-vitsmall
该网络目前支持的计算平台如下表所示：

<table class="docutils align-default" style="width: 100%;">
    <tbody>
        <tr class="row-even centered-table-text">
            <td rowspan="2">计算平台</td>
            <td>通用 X86 架构计算机</td>
            <td>Radxa ROCK5B+</td>
            <td>OrangePi 5 Ultra</td>
            <td>NVIDIA Jetson Orin Nano Super</td>
            <td>NVIDIA Jetson AGX Orin</td>
            <td>D-Robotics RDK X5</td>
        </tr>
        <tr class="row-odd centered-table-text">
            <td>●</td>
            <td>●</td>
            <td>●</td>
            <td>●</td>
            <td>●</td>
            <td>○</td>
        </tr>
        <tr class="row-even centered-table-text">
            <td>模型大小</td>
            <td colspan="6">100M</td>
        </tr>
        <tr class="row-odd centered-table-text">
            <td>传感器</td>
            <td colspan="6">AC1</td>
        </tr>
    </tbody>
</table>

以下视频展示了该网络在支持的计算平台上对室内场景进行离线稠密深度估计演示效果。

<div style="margin-bottom: 24px; position:relative; width:100%; padding-top: 44.12%;" class="video-container">
    <iframe src="https://cdn.robosense.cn/AC_wiki/dense_depth_net_radxa.mp4" allowfullscreen style="position:absolute; top:0; left:0; width:100%; height:100%;"></iframe>
</div>

视频数据：[Library](https://cdn.robosense.cn/AC_wiki/dense_depth_net_demo.zip)    
详细代码：[AC1 Dense Depth vitsmall](https://github.com/RoboSense-Robotics/robosense_ac_perception)
