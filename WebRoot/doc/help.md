﻿<a href="../download/AP.pdf" download="用户手册.pdf" style="display: block;text-align:right;">
<img border="0" src="../images/helpdoc/SVG/downloadpdf.svg" alt="下载pdf">
</a>

# 用户手册

- [第一章 系统介绍](#第一章系统介绍)
- [第二章 应用介绍](#第二章应用介绍) 
    - [2.1 页面布局](#2.1页面布局)
    - [2.2 实时评价](#2.2实时评价)
      - [2.2.1 煤层气井](#2.2.1煤层气井) 
          - [2.2.1.1 统计数据](#2.2.1.1统计数据)
          - [2.2.1.2 目标井](#2.2.1.2目标井)
          - [2.2.1.3 单井数据](#2.2.1.3单井数据)
    - [2.3 权限管理](#2.3权限管理)
      - [2.3.1 单位管理](#2.3.1单位管理)
      - [2.3.2 用户管理](#2.3.2用户管理)
      - [2.3.3 角色管理](#2.3.3角色管理)  
    - [2.4 数据配置](#2.4数据配置)  
      - [2.4.1 井名信息](#2.4.1井名信息)
          - [2.4.1.1 数据收集](#2.4.1.1数据收集)
          - [2.4.1.2 数据录入](#2.4.1.2数据录入)
          - [2.4.1.3 修改井名](#2.4.1.3修改井名)
          - [2.4.1.4 删除数据](#2.4.1.4删除数据)
      - [2.4.2 驱动配置](#2.4.2驱动配置)
    - [2.5 系统配置](#2.5系统配置)  
      - [2.5.1 字典配置](#2.5.1字典配置) 
      - [2.5.2 统计配置](#2.5.2统计配置) 
      - [2.5.3 报警配置](#2.5.3报警配置) 

<h1><a name="第一章系统介绍"></a>第一章 系统介绍</h1>  

&emsp;&emsp;AgileProduction 煤层气敏捷生产 V7.2主要在采集、控制的基础上，侧重煤层气井生产智能分析。提升对目标区块和单井的整体管控能力。

**服务器环境要求**  
>- CPU：2核及以上  
>- 内存：8G及以上  
>- 硬盘：500G及以上  
>- 操作系统：建议Windows server 2012 64位及以上  
>- 数据库：Oracle 11g及以上  
>- JDK：8.0及以上  
>- Tomcat：9.0及以上

<h1><a name="第二章应用介绍"></a>第二章 应用介绍</h1>

&emsp;&emsp;**浏览器要求：建议谷歌浏览器、360浏览器极速模式、IE9以上版本**

<h2><a name="2.1页面布局"></a>2.1 页面布局</h2>

>1. banner区：包括修改密码、退出、帮助及全屏按钮；  
>2. 功能导航区：系统各主功能模块；  
>3. 组织导航区：用户组织结构；  
>4. 统计区：信息统计图表；  
>5. 单井数据区：单井采集及控制详细信息。

&emsp;&emsp;通过点击界面中缝位置的图标![伸缩按钮](../images/helpdoc/PNG/025.png?t=202005140953&raw=true)或![伸缩按钮](../images/helpdoc/PNG/026.png?t=202005140953&raw=true)可实现界面伸缩。

![列表伸缩](../images/helpdoc/PNG/001.png?t=202005140953&raw=true)

<h2><a name="2.2实时评价"></a>2.2 实时评价</h2>  

<h3><a name="2.2.1煤层气井"></a>2.2.1 煤层气井</h3>

<h4><a name="2.2.1.1统计数据"></a>2.2.1.1 统计数据</h4>

>1. 统计主标签：包括时率、通信；  
>2. 统计子标签：各主标签包含的子项，如时率包括运行状态和运行时率；  
>3. 统计表/图：根据选择的各主标签、子标签显示相关统计信息。

![统计数据](../images/helpdoc/PNG/002.png?t=202005140953&raw=true)

<h4><a name="2.2.1.2目标井"></a>2.2.1.2 目标井</h4>

&emsp;&emsp;如需查看某一类目标井的具体信息时，  
>1. 点击统计图中对应的饼图或饼图标签；  
>2. 统计表中显示该组织下的所有对应井； 
>3. 右侧单井详情中显示该井的详细信息；
>4. 选择一行后点击**查看历史**或**双击**该行可查看该井的历史信息。

![目标井](../images/helpdoc/PNG/003.png?t=202005140953&raw=true)  
  
![单井历史](../images/helpdoc/PNG/004.png?t=202005140953&raw=true)  

<h4><a name="2.2.1.3单井数据"></a>2.2.1.3 单井数据</h4>

&emsp;&emsp;包括采集、控制。  

**1、采集**  
&emsp;&emsp;显示传感器采集数据，包括气体质量流量计数据、量水仪数据、液面仪数据、变频器数据等。  

![采集](../images/helpdoc/PNG/005.png?t=202005140953&raw=true)  

**2、控制**  
&emsp;&emsp;井场设备控制。  

![控制](../images/helpdoc/PNG/006.png?t=202005140953&raw=true)

<h2><a name="2.3权限管理"></a>2.3 权限管理</h2>

&emsp;&emsp;系统部署完成后需要新建单位、用户并划分权限。

<h3><a name="2.3.1单位管理"></a>2.3.1 单位管理</h3>

1. 使用系统管理员账号登录系统。  
2. 进入**单位管理**模块创建单位组织。如模拟煤层气公司—模拟采气厂—模拟工区。  
3. 点击![创建按钮](../images/helpdoc/PNG/015.png?t=202005140953&raw=true)，创建模拟煤层气公司；填写完成后，点击![保存按钮](../images/helpdoc/PNG/016.png?t=202005140953&raw=true)，完成创建。  
>- 上级单位：由于模拟煤层气公司为根节点，上级单位不选择；  
>- 单位类别：按实际选择，局级；  
>- 单位名称：模拟煤层气公司；  
>- 单位编码、单位级别：确定上级单位、单位类别后自动生成；  
>- 单位说明：可不填写。  

![创建模拟煤层气公司](../images/helpdoc/PNG/007.png?t=202005140953&raw=true)

4. 点击![创建按钮](../images/helpdoc/PNG/015.png?t=202005140953&raw=true)，创建模拟采气厂；填写完成后，点击![保存按钮](../images/helpdoc/PNG/016.png?t=202005140953&raw=true)，完成创建。  
>- 上级单位：已创建根节点，选择模拟煤层气公司；  
>- 单位类别：按实际选择，厂级；
>- 单位名称：模拟采气厂。 

![创建模拟采气厂](../images/helpdoc/PNG/008.png?t=202005140953&raw=true)

5. 依次完成各级单位组织创建。  

![单位管理](../images/helpdoc/PNG/009.png?t=202005140953&raw=true) 


<h3><a name="2.3.2用户管理"></a>2.3.2 用户管理</h3>

&emsp;&emsp;接下来进入**用户管理**模块，为不同的单位组织创建用户。点击![创建按钮](../images/helpdoc/PNG/015.png?t=202005140953&raw=true)，创建新用户；填写完成后，点击![保存按钮](../images/helpdoc/PNG/016.png?t=202005140953&raw=true)，完成创建。  
>- 单位名称：选择已创建的单位组织，确定组织的用户登录后，只能看到该组织及该组织的下属单位对应的信息；  
>- 角色：包括层气软件管理员、煤层气软件分析员，不同的角色拥有不同的权限;  
>- 用户名称、用户账号、用户密码：按实际填写;
>- 用户电话、内部邮箱：可不填写;  
>- 快捷登录：在登录界面是否可以免密登录，一般用于数据查询人员。

![创建用户](../images/helpdoc/PNG/010.png?t=202005140953&raw=true)

<h3><a name="2.3.3角色管理"></a>2.3.3 角色管理</h3>

&emsp;&emsp;进入**角色管理**模块，创建不同的角色，通过权限授予为不同的角色设置模块访问权限。  
1. 点击![创建按钮](../images/helpdoc/PNG/015.png?t=202005140953&raw=true)，创建新角色。  
>- 角色名称：自定义，便于识别角色；  
>- 角色编码：自定义，用于开发人员识别，用户不会用到；  
>- 角色描述：角色具体功能描述。

2. 在右侧权限角色授予界面为新角色配置可访问的模块，点击![保存按钮](../images/helpdoc/PNG/033.png?t=202005140953&raw=true)，完成权限授予。  

![创建角色](../images/helpdoc/PNG/011.png?t=202005140953&raw=true)

<h2><a name="2.4数据配置"></a>2.4 数据配置</h2>

&emsp;&emsp;井名信息录入可直接从编辑好的Excel中粘贴过来。

<h3><a name="2.4.1井名信息"></a>2.4.1 井名信息</h3>

<h4><a name="2.4.1.1数据收集"></a>2.4.1.1 数据收集</h4>

>- 单位名称：井所属单位，单位管理中创建的单位名称；  
>- 井名；  
>- 单元类型：煤层气井、阀组、增压泵；  
>- 驱动名称：山西中联煤层气；  
>- 设备地址：按实际填写；  
>- 设备编号：网关只连接一口井时，填写01；对于丛式井，网关连接多口井时，按网关中配置的设备ID填写，如01、02、03......；
>- 周期数据采集间隔：周期数据的采集间隔；  
>- 离散采集间隔：离散数据的采集间隔，如电流、电压等；  
>- 数据保存间隔：数据保存进数据库的时间间隔； 
>- 视频路径：监控视频的URL路径；  
>- 排序编号：井名在系统显示时的排序。

<h4><a name="2.4.1.2数据录入"></a>2.4.1.2 数据录入</h4>

&emsp;&emsp;在Excel中编辑好后粘贴至井名信息模块中，可先点击导出按钮导出Excel模板。  
**注意：**  
**（1）录入时需要先在组织导航中选择录入井所在的组织，如模拟工区；否则会提示“请先选择组织节点”。**  
**（2）复制时序号列不要复制。**

<h4><a name="2.4.1.3修改井名"></a>2.4.1.3 修改井名</h4>

&emsp;&emsp;在列表中修改井名，完成后点击![修改井名按钮](../images/helpdoc/PNG/012.png?t=202005140953&raw=true)。  
**注意：**  
**（1）不要删除修改井，再重新录入新井，会导致历史数据丢失；**  
**（2）修改完成后，点击“修改井名”按钮，不要点击“保存”按钮。**

<h4><a name="2.4.1.4删除数据"></a>2.4.1.4 删除数据</h4>

&emsp;&emsp;选中一行或多行，右键，选择删除行，然后点击![保存按钮](../images/helpdoc/PNG/033.png?t=202005140953&raw=true)。

![删除数据](../images/helpdoc/PNG/013.png?t=202005140953&raw=true)

<h3><a name="2.4.2驱动配置"></a>2.4.2 驱动配置</h3>

&emsp;&emsp;针对不同的设备安装情况设置不同的采集项和控制项。  
&emsp;&emsp;点击![创建按钮](../images/helpdoc/PNG/015.png?t=202005140953&raw=true)创建采控类型，如类型名称“类型一”，类型编码“type1”，类型描述按实际填写，创建完成后，在右侧列表中勾选实际采集项和控制项，点击![保存按钮](../images/helpdoc/PNG/033.png?t=202005140953&raw=true)完成配置。后续在**井名信息**模块数据录入时按照单井实际采控项选择不同的采控类型。

![驱动配置](../images/helpdoc/PNG/014.png?t=202005140953&raw=true)

<h2><a name="2.5系统配置"></a>2.5 系统配置</h2>

<h3><a name="2.5.1字典配置"></a>2.5.1 字典配置</h3>

&emsp;&emsp;对各模块显示的字段进行管理，主要修改字段名称、显示顺序、是否显示等。

![字典配置](../images/helpdoc/PNG/017.png?t=202005140953&raw=true)

<h3><a name="2.5.2统计配置"></a>2.5.2 统计配置</h3>

&emsp;&emsp;配置各项参数的统计级别。

![统计配置](../images/helpdoc/PNG/018.png?t=202005140953&raw=true)

<h3><a name="2.5.3报警配置"></a>2.5.3 报警配置</h3>

&emsp;&emsp;设置报警级别、开关、颜色等。

![报警配置](../images/helpdoc/PNG/019.png?t=202005140953&raw=true)