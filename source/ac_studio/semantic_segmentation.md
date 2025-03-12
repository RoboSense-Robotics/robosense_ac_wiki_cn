# 语义分割  
通过 mask2former 模型对图像进行语义分割，生成目标的分割掩码。  

以下视频提供了开放道路上语义分割离线演示效果，主要使用的硬件配置为：  

<table class="docutils align-default">
    <tbody>
        <tr class="row-even">
            <td>计算平台</td>
            <td>CPU: Intel® Core™ i5-10500 CPU @ 3.10GHz x 12 <br> MEM: 32GB <br> GPU: NVIDIA GeForce RTX 3060 </td>
        </tr>
        <tr class="row-odd">
            <td>传感器</td>
            <td>AC1</td>
        </tr>
    </tbody>
</table> 
<iframe style="margin-bottom: 24px;" width="100%" height="198" src="https://cdn.robosense.cn/AC_wiki/split_network.mp4" frameborder="0" allowfullscreen></iframe>  

详细代码：[AC1 Semantic Segmentation](http://gitlab.robosense.cn/super_sensor_sdk/ros2_sdk/perception/-/tree/main/python)  

以下视频提供了同样场景下语义分割离线演示效果，主要使用的硬件配置为：  

<table class="docutils align-default">
    <tbody>
        <tr class="row-even">
            <td>计算平台</td>
            <td>Radxa ROCK5B+ </td>
        </tr>
        <tr class="row-odd">
            <td>传感器</td>
            <td>AC1</td>
        </tr>
    </tbody>
</table> 
<iframe style="margin-bottom: 24px;" width="100%" height="199" src="https://cdn.robosense.cn/AC_wiki/split_network_radxa.mp4" frameborder="0" allowfullscreen></iframe>  

详细代码：[AC1 Semantic Segmentation ROCK5B+](http://gitlab.robosense.cn/super_sensor_sdk/ros2_sdk/perception)  

视频数据：[open road](https://cdn.robosense.cn/AC_wiki/split_network_demo.zip)   