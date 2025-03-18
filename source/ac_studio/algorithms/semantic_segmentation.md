# 语义分割  
通过 `mask2former` 模型和 `PPliteseg` 模型对图像进行语义分割，生成目标的分割掩码。

模型大小对结果尤其是细节上会产生不同的影响，以下展示了不同大小模型展现出来的效果。

## mask2former

该网络目前支持的计算平台如下表所示：

<table class="docutils align-default" style="width: 100%;">
    <tbody>
        <tr class="row-even centered-table-text">
            <td rowspan="2">计算平台</td>
            <td>通用 X86 架构计算机</td>
            <td>Radxa ROCK5B+</td>
            <td>OrangePi 5 Ultra</td>
            <td>NVIDIA Jetson Orin Nano Super</td>
            <td>D-Robotics RDK X5</td>
        </tr>
        <tr class="row-odd centered-table-text">
            <td>●</td>
            <td>○</td>
            <td>○</td>
            <td>○</td>
            <td>○</td>
        </tr>
        <tr class="row-even centered-table-text">
            <td>模型大小</td>
            <td colspan="5">216M</td>
        </tr>
        <tr class="row-odd centered-table-text">
            <td>传感器</td>
            <td colspan="5">AC1</td>
        </tr>
    </tbody>
</table>

以下视频展示了该网络在支持的计算平台上对开放道路进行离线语义分割演示效果。

<iframe style="margin-bottom: 24px;" width="100%" height="198" src="https://cdn.robosense.cn/AC_wiki/split_network.mp4" frameborder="0" allowfullscreen></iframe>  

视频数据：[open road](https://cdn.robosense.cn/AC_wiki/split_network_demo.zip)  
详细代码：[AC1 Semantic Segmentation mask2former](https://github.com/RoboSense-Robotics/robosense_ac_perception)

## PPliteseg

该网络目前支持的计算平台如下表所示：

<table class="docutils align-default" style="width: 100%;">
    <tbody>
        <tr class="row-even centered-table-text">
            <td rowspan="2">计算平台</td>
            <td>通用 X86 架构计算机</td>
            <td>Radxa ROCK5B+</td>
            <td>OrangePi 5 Ultra</td>
            <td>NVIDIA Jetson Orin Nano Super</td>
            <td>D-Robotics RDK X5</td>
        </tr>
        <tr class="row-odd centered-table-text">
            <td>●</td>
            <td>●</td>
            <td>○</td>
            <td>○</td>
            <td>○</td>
        </tr>
        <tr class="row-even centered-table-text">
            <td>模型大小</td>
            <td colspan="5">49M</td>
        </tr>
        <tr class="row-odd centered-table-text">
            <td>传感器</td>
            <td colspan="5">AC1</td>
        </tr>
    </tbody>
</table>

以下视频展示了该网络在支持的计算平台上对开放道路进行离线语义分割演示效果。

<iframe style="margin-bottom: 24px;" width="100%" height="199" src="https://cdn.robosense.cn/AC_wiki/split_network_radxa.mp4" frameborder="0" allowfullscreen></iframe>  

视频数据：[open road](https://cdn.robosense.cn/AC_wiki/split_network_demo.zip)  
详细代码：[AC1 Semantic Segmentation PPliteseg](https://github.com/RoboSense-Robotics/robosense_ac_perception)
