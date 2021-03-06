package com.gao.thread.calculate;


import java.net.ServerSocket;
import java.net.Socket;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.ThreadPoolExecutor;

import com.gao.model.drive.RTUDriveConfig;
import com.gao.tast.EquipmentDriverServerTast;


public class DriveServerThread extends Thread{
	private ServerSocket serverSocket;
	private RTUDriveConfig driveConfig;
	private ExecutorService pool = Executors.newCachedThreadPool();
	public DriveServerThread(ServerSocket serverSocket,RTUDriveConfig driveConfig) {
		super();
		this.serverSocket = serverSocket;
		this.driveConfig = driveConfig;
	}
	
	public void run(){
		synchronized(this){
			while(true){
				for(int i=0;i<EquipmentDriverServerTast.clientUnitList.size();i++){
					if(EquipmentDriverServerTast.clientUnitList.get(i).socket==null){
						EquipmentDriverServerTast.clientUnitList.get(i).socket=new Socket();
						System.out.println(driveConfig.getDriverCode()+"等待客户端连接...");
						try {
							if(serverSocket==null){
								serverSocket = new ServerSocket(driveConfig.getPort());
							}
							EquipmentDriverServerTast.clientUnitList.get(i).socket=serverSocket.accept();
							if(EquipmentDriverServerTast.clientUnitList.size()>0&&EquipmentDriverServerTast.clientUnitList.get(i).socket!=null){
								System.out.println(driveConfig.getDriverCode()+"服务端接收到客户端连接,thread:"+i+",IP:"+EquipmentDriverServerTast.clientUnitList.get(i).socket.getInetAddress()+",端口:"+EquipmentDriverServerTast.clientUnitList.get(i).socket.getPort());
								
								
								EquipmentDriverServerTast.clientUnitList.get(i).thread=new ProtocolModbusThread(i,EquipmentDriverServerTast.clientUnitList.get(i),driveConfig);
								if(EquipmentDriverServerTast.clientUnitList.get(i).thread!=null){
//									EquipmentDriverServerTast.clientUnitList.get(i).thread.start();
									pool.submit(EquipmentDriverServerTast.clientUnitList.get(i).thread);
									System.out.println(driveConfig.getDriverCode()+"线程池中当前线程数："+((ThreadPoolExecutor)pool).getPoolSize());
									System.out.println(driveConfig.getDriverCode()+"线程池中当前活跃线程数："+((ThreadPoolExecutor)pool).getActiveCount());
									break;
								}
							}
						} catch (Exception e) {
							e.printStackTrace();
							break;
						}
					}
				}
				try {
					Thread.sleep(1000);
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		}
		
	}


	public RTUDriveConfig getDriveConfig() {
		return driveConfig;
	}


	public void setDriveConfig(RTUDriveConfig driveConfig) {
		this.driveConfig = driveConfig;
	}


	public ServerSocket getServerSocket() {
		return serverSocket;
	}


	public void setServerSocket(ServerSocket serverSocket) {
		this.serverSocket = serverSocket;
	}
	
}
