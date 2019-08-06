var fake_data = {
    "getPoints" : {
		code: 10000,
		curPage: 1,
		totalPage: 10,
		data: [
            {
                id: 1,
                name: "3号楼408室东1#",
                devices: [
	                {
	                	id: 1,
		                type: 0,
		                img: "./imgs/c3bc39d3dcc324f7e276acca7f71ac29.png",
		                name: "灭火器",
	                	admin: "老王",
		                adminPhone: 1211542682,
		                notes: ("<h3>灭火器信息:</h3>"+
								"<p>编号     GP-1099<p>"+
								"<p>所在位置     1号楼3层<p>"+
								"<p>型号     手提式干粉灭火器<p>"+
								"<p>型号     MFZ/ABC4<p>"+
								"<p>有效期     2023.6.10<p>"+
								"<p><p>"+
								"<p>检查要求：<p>"+
								"<p>1.保险销、铅封:是否完好,有无丢失。<p>"+
								"<p>2.筒体:是否有锈蚀、变形现象<p>"+
								"<p>3.铭牌：是否完整、清晰。<p>"+
								"<p>4.喷嘴、软管：是否老化、是否有变形和损坏。<p>"+
								"<p>5.压力指示：填入黄、绿或红。黄色区域为充足，可使用；绿色区域为正常；红色区域为欠压，应及时冲装。<p>"+
								"<p>6.压把阀体：其金属件是否有严重损伤、变形、锈蚀等影响使用的缺陷。<p>"+
								"<p>7.卫生：箱体、瓶体表面无积尘。<p>"),
		                records: [
		                	{
		                		pid: 1,
		                		did: 1,
		                		id: 1,
		                		operator: "老王",
				                operatorPhone: 1211542682,
				                status: "正常",
				                updateTime: "2019-07-04 12:12:12",
		                	},
		                	{
		                		pid: 1,
		                		did: 1,
		                		id: 2,
		                		operator: "老王",
				                operatorPhone: 1211542682,
				                status: "正常",
				                updateTime: "2019-07-04 12:12:12",
		                	}
		                ]
	                }
                ]
            },
            {
                id: 2,
                name: "3号楼408室东2#",
                devices: [
	                {
	                	id: 1,
	                	type: 0,
		                img: "./imgs/c3bc39d3dcc324f7e276acca7f71ac29.png",
		                name: "灭火器",
	                	admin: "老王",
		                adminPhone: 1211542682,
		                notes: ("<h3>消防栓信息:</h3>"+
								"<p>编号     GP-1099<p>"+
								"<p>型号     手提式干粉灭火器<p>"+
								"<p>型号     MFZ/ABC4<p>"+
								"<p>有效期     2023.6.10<p>"+
								"<p><p>"+
								"<p>检查要求：<p>"+
								"<p>1.保险销、铅封:是否完好,有无丢失。<p>"+
								"<p>2.筒体:是否有锈蚀、变形现象<p>"+
								"<p>3.铭牌：是否完整、清晰。<p>"+
								"<p>4.喷嘴、软管：是否老化、是否有变形和损坏。<p>"+
								"<p>5.压力指示：填入黄、绿或红。黄色区域为充足，可使用；绿色区域为正常；红色区域为欠压，应及时冲装。<p>"+
								"<p>6.压把阀体：其金属件是否有严重损伤、变形、锈蚀等影响使用的缺陷。<p>"+
								"<p>7.卫生：箱体、瓶体表面无积尘。<p>"),
		                records: [
		                	{
		                		pid: 2,
		                		did: 2,
		                		id: 3,
		                		operator: "老王",
				                operatorPhone: 1211542682,
				                status: "正常",
				                updateTime: "2019-07-04 12:12:12",
		                	},
		                	{
		                		pid: 2,
		                		did: 2,
		                		id: 4,
		                		operator: "老王",
				                operatorPhone: 1211542682,
				                status: "正常",
				                updateTime: "2019-07-04 12:12:12",
		                	}
		                ]
	                }
                ]
            }
        ]
	},

	"getPoint" : {
		code: 10000,
		data: {
			id: 1,
            name: "3号楼408室东1#",
            devices: [
                {
                	id: 1,
	                type: 0,
	                img: "./imgs/c3bc39d3dcc324f7e276acca7f71ac29.png",
	                name: "灭火器",
                	admin: "老王",
	                adminPhone: 1211542682,
	                notes: ("<h3>灭火器信息:</h3>"+
							"<p>编号     GP-1099<p>"+
							"<p>所在位置     1号楼3层<p>"+
							"<p>型号     手提式干粉灭火器<p>"+
							"<p>型号     MFZ/ABC4<p>"+
							"<p>有效期     2023.6.10<p>"+
							"<p><p>"+
							"<p>检查要求：<p>"+
							"<p>1.保险销、铅封:是否完好,有无丢失。<p>"+
							"<p>2.筒体:是否有锈蚀、变形现象<p>"+
							"<p>3.铭牌：是否完整、清晰。<p>"+
							"<p>4.喷嘴、软管：是否老化、是否有变形和损坏。<p>"+
							"<p>5.压力指示：填入黄、绿或红。黄色区域为充足，可使用；绿色区域为正常；红色区域为欠压，应及时冲装。<p>"+
							"<p>6.压把阀体：其金属件是否有严重损伤、变形、锈蚀等影响使用的缺陷。<p>"+
							"<p>7.卫生：箱体、瓶体表面无积尘。<p>"),
	                records: [
	                	{
	                		pid: 1,
	                		did: 1,
	                		id: 1,
	                		operator: "老王",
			                operatorPhone: 1211542682,
			                status: "正常",
			                updateTime: "2019-07-04 12:12:12",
	                	},
	                	{
	                		pid: 1,
	                		did: 1,
	                		id: 2,
	                		operator: "老王",
			                operatorPhone: 1211542682,
			                status: "正常",
			                updateTime: "2019-07-04 12:12:12",
	                	}
	                ]
                },
                {
                	id: 2,
	                type: 1,
	                img: "./imgs/c3bc39d3dcc324f7e276acca7f71ac29.png",
	                name: "消防栓",
                	admin: "老王",
	                adminPhone: 1211542682,
	                notes: ("<h3>灭火器信息:</h3>"+
							"<p>编号     GP-1099<p>"+
							"<p>所在位置     1号楼3层<p>"+
							"<p>型号     手提式干粉灭火器<p>"+
							"<p>型号     MFZ/ABC4<p>"+
							"<p>有效期     2023.6.10<p>"+
							"<p><p>"+
							"<p>检查要求：<p>"+
							"<p>1.保险销、铅封:是否完好,有无丢失。<p>"+
							"<p>2.筒体:是否有锈蚀、变形现象<p>"+
							"<p>3.铭牌：是否完整、清晰。<p>"+
							"<p>4.喷嘴、软管：是否老化、是否有变形和损坏。<p>"+
							"<p>5.压力指示：填入黄、绿或红。黄色区域为充足，可使用；绿色区域为正常；红色区域为欠压，应及时冲装。<p>"+
							"<p>6.压把阀体：其金属件是否有严重损伤、变形、锈蚀等影响使用的缺陷。<p>"+
							"<p>7.卫生：箱体、瓶体表面无积尘。<p>"),
	                records: [
	                	{
	                		pid: 1,
	                		did: 1,
	                		id: 1,
	                		operator: "老王",
			                operatorPhone: 1211542682,
			                status: "正常",
			                updateTime: "2019-07-04 12:12:12",
	                	},
	                	{
	                		pid: 1,
	                		did: 1,
	                		id: 2,
	                		operator: "老王",
			                operatorPhone: 1211542682,
			                status: "正常",
			                updateTime: "2019-07-04 12:12:12",
	                	}
	                ]
                }
            ]
        }
	},

	"getRecords": {
		code: 10000,
		curPage: 1,
		totalPage: 10,
		data: [
            {
                id: 1,
                operator: "老王",
                operatorPhone: 1211542682,
                status: "正常",
                updateTime: "2019-07-04 12:12:12",
                device: {
                	id: 1,
                	type: 0,
	                img: "./imgs/c3bc39d3dcc324f7e276acca7f71ac29.png",
	                name: "灭火器",
                	admin: "老王",
	                adminPhone: 1211542682,
                },
                point: {
                	id: 1,
                	name: "3号楼408室东1#",
                }
            },
            {
                id: 2,
                operator: "老王",
                operatorPhone: 1211542682,
                status: "正常",
                updateTime: "2019-07-04 12:12:12",
				device: {
                	id: 1,
                	type: 0,
	                img: "./imgs/c3bc39d3dcc324f7e276acca7f71ac29.png",
	                name: "灭火器",
                	admin: "老王",
	                adminPhone: 1211542682,
                },
                point: {
                	id: 1,
                	name: "3号楼408室东1#",
                }
            }
        ]
	},

	"getRecord": {
		code: 10000,
		data: {
			id: 1,
	        operator: "老王",
	        operatorPhone: 1211542682,
	        status: "正常",
	        updateTime: "2019-07-04 12:12:12",
	        notes: "",
	        photos: [
	        	{
		        	id: 1,
		        	url: "./imgs/c3bc39d3dcc324f7e276acca7f71ac29.png"
	        	},
	        	{
		        	id: 2,
		        	url: "./imgs/c3bc39d3dcc324f7e276acca7f71ac29.png"
	        	}
	        ],
	        extr: [
	        	{
	        		id: 1,
	        		name: "有效期",
	        		status: "正常"
	        	},
	        	{
	        		id: 2,
	        		name: "压力表",
	        		status: "正常"
	        	},
	        	{
	        		id: 3,
	        		name: "喷管",
	        		status: "正常"
	        	},
	        	{
	        		id: 4,
	        		name: "保险栓",
	        		status: "正常"
	        	}
	        ],

	        device: {
            	id: 1,
            	type: 1,
                img: "./imgs/c3bc39d3dcc324f7e276acca7f71ac29.png",
                name: "消防栓",
            	admin: "老王",
                adminPhone: 1211542682,
                notes: ("<h3>消防栓信息:</h3>"+
						"<p>编号     GP-1099<p>"+
						"<p>型号     手提式干粉灭火器<p>"+
						"<p>型号     MFZ/ABC4<p>"+
						"<p>有效期     2023.6.10<p>"+
						"<p><p>"+
						"<p>检查要求：<p>"+
						"<p>1.保险销、铅封:是否完好,有无丢失。<p>"+
						"<p>2.筒体:是否有锈蚀、变形现象<p>"+
						"<p>3.铭牌：是否完整、清晰。<p>"+
						"<p>4.喷嘴、软管：是否老化、是否有变形和损坏。<p>"+
						"<p>5.压力指示：填入黄、绿或红。黄色区域为充足，可使用；绿色区域为正常；红色区域为欠压，应及时冲装。<p>"+
						"<p>6.压把阀体：其金属件是否有严重损伤、变形、锈蚀等影响使用的缺陷。<p>"+
						"<p>7.卫生：箱体、瓶体表面无积尘。<p>"),
            }
		}
	},

	"getDevice": {
		code: 10000,
		data: {
			id: 1,
        	type: 1,
            img: "./imgs/c3bc39d3dcc324f7e276acca7f71ac29.png",
            name: "消防栓",
        	admin: "老王",
            adminPhone: 1211542682,
            notes: ("<b>消防栓信息:</b>"+
					"<p>编号     GP-1099<p>"+
					"<p>型号     手提式干粉灭火器<p>"+
					"<p>型号     MFZ/ABC4<p>"+
					"<p>有效期     2023.6.10<p>"+
					"<p><p>"+
					"<b>检查要求：</b>"+
					"<p>1.保险销、铅封:是否完好,有无丢失。<p>"+
					"<p>2.筒体:是否有锈蚀、变形现象<p>"+
					"<p>3.铭牌：是否完整、清晰。<p>"+
					"<p>4.喷嘴、软管：是否老化、是否有变形和损坏。<p>"+
					"<p>5.压力指示：填入黄、绿或红。黄色区域为充足，可使用；绿色区域为正常；红色区域为欠压，应及时冲装。<p>"+
					"<p>6.压把阀体：其金属件是否有严重损伤、变形、锈蚀等影响使用的缺陷。<p>"+
					"<p>7.卫生：箱体、瓶体表面无积尘。<p>"+
					"<p><img src='./imgs/c3bc39d3dcc324f7e276acca7f71ac29.png' width=100%><p>"),
			extr: [
	        	{
	        		id: 1,
	        		name: "有效期",
	        	},
	        	{
	        		id: 2,
	        		name: "压力表",
	        	},
	        	{
	        		id: 3,
	        		name: "喷管",
	        	},
	        	{
	        		id: 4,
	        		name: "保险栓",
	        	}
	        ],
			records: [
	        	{
	        		did: 1,
	        		id: 3,
	        		operator: "老王",
	                operatorPhone: 1211542682,
	                status: "正常",
	                updateTime: "2019-07-04 12:12:12",
	        	},
	        	{
	        		did: 1,
	        		id: 4,
	        		operator: "老王",
	                operatorPhone: 1211542682,
	                status: "正常",
	                updateTime: "2019-07-04 12:12:12",
	        	}
	        ],
	        point: {
	        	id: 1,
	            name: "3号楼408室东1#",
	        }
	    }
	},

	"saveRecord" : {
		code: 10000,
		data: null,
	}
}