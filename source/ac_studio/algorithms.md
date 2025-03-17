# 开源算法
## 点云与视觉融合
利用传感器自带 IMU 进行运动补偿，并将图像和点云相互映射，并对其进行可视化。  

以下视频提供了点云上色的实时演示效果，主要使用的硬件配置为：  

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

<iframe style="margin-bottom: 24px;" width="100%" height="296" src="https://cdn.robosense.cn/AC_wiki/postprocess_nezha.mp4" frameborder="0" allowfullscreen></iframe>  

视频数据：[Nezha](https://cdn.robosense.cn/AC_wiki/nezha.tar.gz)   

详细代码：[AC1 Color Lidar](https://github.com/RoboSense-Robotics/robosense_ac_postprocess)


## 定位
**localization** 用于提供实时的相对定位信息或全局定位信息，该项目包含了以下两个模块： 
- msf_localization 是基于 **ESKF** 框架的融合定位模块，可提供只基于 **imu+轮速** 的相对定位信息以及融合 **点云定位结果** 的全局定位信息，该模块也可接入其他传感器观测进行后续拓展；
- lidar_localization 是基于点云地图的点云定位模块，使用 ceres 进行点云匹配，使用PCL进行点云预处理。  

以下视频提供了移动轮式小车定位实时演示效果，主要使用的硬件配置为：  

<table class="docutils align-default">
    <tbody>
        <tr class="row-even">
            <td>计算平台</td>
            <td>Radxa ROCK5B+</td>
        </tr>
        <tr class="row-odd">
            <td>传感器</td>
            <td>AC1</td>
        </tr>
        <tr class="row-even">
            <td>移动机器人</td>
            <td>轮式移动平台</td>
        </tr>
    </tbody>
</table>  
<iframe style="margin-bottom: 24px;" width="100%" height="424" src="https://cdn.robosense.cn/AC_wiki/localization_demo.mp4" frameborder="0" allowfullscreen></iframe>  

视频数据：[Mobile wheeled vehicle](https://cdn.robosense.cn/AC_wiki/localization_demo.zip)  

详细代码：[AC1 Locatization](https://github.com/RoboSense-Robotics/robosense_localization)


## SLAM
一个融合 LiDAR、视觉和 IMU 等多传感器紧耦合里程计系统。基于 HKU-MARS 实验室开源的 FAST-LIVO 工程开发，针对 Active Camera 进行专门的适配和优化，能够实时输出 Active Camera 的姿态，并生成带颜色信息的三维点云。  

以下视频提供了攀登某景区的 SLAM 离线演示效果，主要使用的硬件配置为： 

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

<iframe style="margin-bottom: 24px;" width="100%" height="264" src="https://cdn.robosense.cn/AC_wiki/AC1_2.0_zuopaotai.mp4" frameborder="0" allowfullscreen></iframe>  

视频数据：[Climbing Spot](https://cdn.robosense.cn/AC_wiki/zuopaotai.zip)

以下视频提供了某景区欧式建筑的 SLAM 离线演示效果，主要使用的硬件配置为：

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

<iframe style="margin-bottom: 24px;" width="100%" height="264" src="https://cdn.robosense.cn/AC_wiki/shuichi_slam_demo.mp4" frameborder="0" allowfullscreen></iframe>

视频数据：[European architecture](https://cdn.robosense.cn/AC_wiki/shuichi.zip)

详细代码：[AC1 SLAM](https://github.com/RoboSense-Robotics/robosense_ac_slam)


## 3D高斯溅射
以 SLAM 得到每帧数据初始姿态的基础上，采用 3D Gaussian Splating 方法对场景进行三维渲染。  

以下视频提供了某景区欧式建筑的 3D高斯溅射离线演示效果，主要使用的硬件配置为：  

<table class="docutils align-default">
    <tbody>
        <tr class="row-even">
            <td>计算平台</td>
            <td>CPU: Intel® Xeon(R) Gold 6230R CPU @ 2.10GHz x 104 <br> GPU: NVIDIA A40 <br> MEM: 64G（根据场景的大小，对显存的要求有所区别） </td>
        </tr>
        <tr class="row-odd">
            <td>传感器</td>
            <td>AC1</td>
        </tr>
    </tbody>
</table>
<iframe style="margin-bottom: 24px;" width="100%" height="435" src="https://cdn.robosense.cn/AC_wiki/3dgs_demo.mp4" frameborder="0" allowfullscreen></iframe>  

视频数据：[European architecture](https://cdn.robosense.cn/AC_wiki/shuichi.zip)

详细代码：[AC1 3dgs](https://github.com/RoboSense-Robotics/robosense_ac_3dgs)


## 稠密深度估计
输入单帧图像和点云，通过 PromptDA 算法生成基于图像分辨率的稠密深度图。

以下视频提供了稠密深度估计离线演示效果，主要使用的硬件配置为：

<table class="docutils align-default">
    <tbody>
        <tr class="row-even">
            <td>计算平台</td>
            <td>CPU: Intel® Xeon(R) Gold 6230R CPU @ 2.10GHz x 104 <br> GPU: NVIDIA A40 <br> MEM: 64G </td>
        </tr>
        <tr class="row-odd">
            <td>模型</td>
            <td>PromptDA-vitlarge (1360M）</td>
        </tr>
        <tr class="row-even">
            <td>传感器</td>
            <td>AC1</td>
        </tr>
    </tbody>
</table>

<iframe style="margin-bottom: 24px;" width="100%" height="308" src="https://cdn.robosense.cn/AC_wiki/dense_depth_net.mp4" frameborder="0" allowfullscreen></iframe>

视频数据：[Library](https://cdn.robosense.cn/AC_wiki/dense_depth_net_demo.zip)

详细代码：[AC1 Dense Depth vitlarge](https://github.com/RoboSense-Robotics/robosense_ac_perception)

以下视频提供了同样场景离线演示效果，主要使用的硬件配置为：

<table class="docutils align-default">
    <tbody>
        <tr class="row-even">
            <td>计算平台</td>
            <td>Radxa ROCK5B+</td>
        </tr>
        <tr class="row-odd">
            <td>模型</td>
            <td>PromptDA-vitsmall（100M）</td>
        </tr>
        <tr class="row-even">
            <td>传感器</td>
            <td>AC1</td>
        </tr>
    </tbody>
</table>

<iframe style="margin-bottom: 24px;" width="100%" height="308" src="https://cdn.robosense.cn/AC_wiki/dense_depth_net_radxa.mp4" frameborder="0" allowfullscreen></iframe>  

视频数据：[Library](https://cdn.robosense.cn/AC_wiki/dense_depth_net_demo.zip)    

详细代码：[AC1 Dense Depth vitsmall](https://github.com/RoboSense-Robotics/robosense_ac_perception)


## 目标检测与识别
通过 Yolo V8 检测模型对图像中的主要障碍物（例如人、车等）进行识别，得到目标的类别与位置。  

以下视频提供了室内场景的行人检测离线演示效果，主要使用的硬件配置为：  

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
<iframe style="margin-bottom: 24px;" width="100%" height="389" src="https://cdn.robosense.cn/AC_wiki/target_detection_radxa.mp4" frameborder="0" allowfullscreen></iframe>  

视频数据：[Foreground](https://cdn.robosense.cn/AC_wiki/target_detection_radxa.tar.gz)

详细代码：[AC1 Pedestrian Detection](https://github.com/RoboSense-Robotics/robosense_ac_perception)


## 语义分割
通过 mask2former 模型和 PPliteseg 模型对图像进行语义分割，生成目标的分割掩码。模型大小对结果尤其是细节上会产生不同的影响，以下展示了不同大小模型在不同平台上的效果。

以下视频提供了开放道路上语义分割离线演示效果，主要使用的硬件配置为：

<table class="docutils align-default">
    <tbody>
        <tr class="row-even">
            <td>计算平台</td>
            <td>CPU: Intel® Core™ i5-10500 CPU @ 3.10GHz x 12 <br> MEM: 32GB <br> GPU: NVIDIA GeForce RTX 3060 </td>
        </tr>
        <tr class="row-odd">
            <td>模型</td>
            <td>mask2former (216M)</td>
        </tr>
        <tr class="row-even">
            <td>传感器</td>
            <td>AC1</td>
        </tr>
    </tbody>
</table> 
<iframe style="margin-bottom: 24px;" width="100%" height="198" src="https://cdn.robosense.cn/AC_wiki/split_network.mp4" frameborder="0" allowfullscreen></iframe>  

视频数据：[open road](https://cdn.robosense.cn/AC_wiki/split_network_demo.zip)  

以下视频提供了同样场景下语义分割离线演示效果，主要使用的硬件配置为：

<table class="docutils align-default">
    <tbody>
        <tr class="row-even">
            <td>计算平台</td>
            <td>Radxa ROCK5B+ </td>
        </tr>
        <tr>
            <td>模型</td>
            <td>PPliteseg (49M)</td>
        </tr>
        <tr class="row-odd">
            <td>传感器</td>
            <td>AC1</td>
        </tr>
    </tbody>
</table> 
<iframe style="margin-bottom: 24px;" width="100%" height="199" src="https://cdn.robosense.cn/AC_wiki/split_network_radxa.mp4" frameborder="0" allowfullscreen></iframe>  

视频数据：[open road](https://cdn.robosense.cn/AC_wiki/split_network_demo.zip)

详细代码：[AC1 Semantic Segmentation](https://github.com/RoboSense-Robotics/robosense_ac_perception)
