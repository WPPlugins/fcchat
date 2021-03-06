/*
 * WINDOW STYLE TEMPLATE
 *
 * This file controls aspects of FCChat's layout and appearance.
 * 
 * In this file comments are preceded by double slashes ie.
 *      //THIS IS A COMMENT
 *      
 * Refer to the product manual for info regarding how to effectively make changes to the
 * style template:
 * 
 * http://www.fastcatsoftware.com/chat/manual.htmk
 * 
 * To use this template, edit FCChat/config/config.js as follows:
 * 
 *  //STYLE
 *	window_style_template:"window_blue_silver.js",
 * 
 * If you create a decent style template. Please email us the template at 
 * support@fastcatsoftware.com
 */

(function(){
	

FCChatConfig.styles={
	chat_window:{
		frame:{
			logo:"fastcatlogo.gif",
			color:"#647E99",
			title_css:"font-size:12px;font-weight:bold;color:white;",
			opacity:.90
		},
		main_panel:{
			height:568,
			background_image:"", //"tc2.gif",
			background_color:"silver",
			border:"1px solid #aaaaaa",
			opacity:1,
			send_to_room_button:{
				default_css:"border:1px solid #b0b0b0; border-bottom:1px solid #a0a0a0;padding:2px 67px; font:10px arial;-moz-border-radius: 2px;-webkit-border-radius: 2px;border-radius:2px;",
				single_button_css:"padding:5px 45px;font:14px arial;font-weight:bold;",
				states:{
					link_css:"color:#264673",
					hover_css:"color:white;text-decoration:none;border:1px solid #b0b0b0; border-bottom:1px solid #a0a0a0;",
					disabled_css:"color:#c0c0c0;background-color:#b0b0b0;border:1px solid #a0a0a0"
				}
			},
			send_private_button:{
				default_css:"border:1px solid #b0b0b0; border-bottom:1px solid #a0a0a0;padding:2px 66px; font:10px arial;-moz-border-radius: 2px;-webkit-border-radius: 2px;border-radius:2px;",
				single_button_css:"padding:5px 45px;font:14px arial;font-weight:bold;",
				states:{
					link_css:"color:#264673",
					hover_css:"color:white;text-decoration:none;border:1px solid #b0b0b0; border-bottom:1px solid #a0a0a0;",
					disabled_css:"color:#c0c0c0;background-color:#b0b0b0;border:1px solid #a0a0a0"
				}
			},
			options_button:{
				icon:"options_dark_blue.png",
				color:"#4169E1"
			},
			other_buttons:{
				default_css:"border:1px solid #b0b0b0; border-bottom:1px solid #a0a0a0;padding:2px 8px; font:12px arial;-moz-border-radius: 2px;-webkit-border-radius: 2px;border-radius:2px;",
				states:{
					link_css:"color:#427DB4;text-decoration:none;",
					hover_css:"color:white;text-decoration:none;border:1px solid #b0b0b0; border-bottom:1px solid #a0a0a0;",
					disabled_css:"background-color:#d0d0d0;border:1px solid #b0b0b0;"
				}
			},
			widgets:{
				border:{
					link_css:"border:1px solid #999999",
					hover_css:"border:1px solid lightblue"
				},
				text_icon_css:"background-color:#aaaaaa",
				more_icon_css:"color:white;font-stretch:wider;font-size:10px;font-weight:bold;text-decoration:none"
			},
			text:{
				font:{
					family:"arial",
					color:"#444444",
					size:12,
					weight:700
				}
			},
			links:{
				css:"font-family:arial;font-size:12px;font-weight:700;color:#ccffff;text-decoration:none;"
			},
			chat_panels:{
				chat_room_panel:{
					background_image:"",
					background_color:"#7b7b8b",
					border_css:{"border-bottom":"1px dotted lightgray","border-top":"2px solid #555555"},
					css:{},
					infobox:{
						border:"4px solid silver",
						triangle_color:"silver"
					}
				},
				private_chat_panel:{
					background_image:"",
					msgcenter_background_image:"",
					background_color:"#7b7b8b",
					border_css:{"border-bottom":"1px dotted lightgray","border-top":"2px solid #555555"},
					css:{},
					msg_interrupt:{
						background:"#bbbbbb",
						respond_css:"font-size:8pt;color:#528DC4;text-decoration:none;",
						close_css:"color:#fefefe;font-stretch:wider;font-size:8pt;font-weight:bold;text-decoration:none;"
					}
				},
				user_icon:{
					online_css:"-moz-border-radius: 4px;-webkit-border-radius: 4px;border-radius:4px;background-color:#54FD74;border:1px solid white",
					offline_css:"-moz-border-radius: 4px;-webkit-border-radius: 4px;border-radius:4px;background-color:transparent;border:1px solid #eeeeee",
					busy_css:"-moz-border-radius: 4px;-webkit-border-radius: 4px;border-radius:4px;background-color:yellow;border:1px solid white",
					blocked_css:"-moz-border-radius: 4px;-webkit-border-radius: 4px;border-radius:4px;background-color:#FF8380;border:1px solid white"
				},
				font:{
					family:"arial",
					size:9,
					timestamp_size:8,
					weight:500,
					censored_css:"font-style:italic;color:#cccccc;",
					color:{
						default_text_color:"white",
						timestamp_color:"#4cF66c",
						link_color:"white",
						censored_color:"red",
						offline_css:"color:#4cF66c"
					},
					screen_name_states:{
						online:{
							link_css:"color:#33ffff;text-decoration:none;",
							visited_css:"color:#FDF5E6;text-decoration:none;",
							hover_css:"color:#FFFF00;text-decoration:none;",
							blocked:{
								link_css:"color:#FFB6C1;text-decoration:none;",
								visited_css:"color:red;text-decoration:none;",
								hover_css:"color:#cc0000;text-decoration:none;"
							}
						},
						offline:{
							link_css:"color:#33ffff;text-decoration:none;",
							visited_css:"color:#B0E0E6;text-decoration:none;",
							hover_css:"color:#ADD8E6;text-decoration:none;",
							blocked:{
								link_css:"color:#FFB6C1;text-decoration:none;",
								visited_css:"color:red;text-decoration:none;",
								hover_css:"color:#cc0000;text-decoration:none;"
							}
						}
					}
				}
			},
			side_panels:{
				background_color:"silver",
				divider_border:"1px dotted #777",
				border_css:{"border-top":"2px solid gray","border-bottom":"1px dotted #777"},
				opacity:1,
				screen_name_dividers:{
					background_color:"transparent",
					hover_color:"#D9DEE5",
					border:"0px solid #cccccc"
				},
				room_display_panel:{
					background_color:"transparent",
					divider:"0px solid gray",
					text_css:"font-family:arial;font-size:8pt;font-weight:500;color:#204096;"
				},
				private_group_panel:{
					border_css:{"border-top":"2px solid gray"},
					header:{
						background_color:"transparent",
						divider:"0px solid gray",
						css:"font-family:arial;font-size:12px;color:#444444;",
						link_css:"color:#427DB4;text-decoration:none;"
					},
					selected_user:{
						background_color:"#e5e7eB",
						arrow:{
							color:"green",
							hover_color:"red"
						}
					}
				},
				user_icon:{
					online_css:"-moz-border-radius: 4px;-webkit-border-radius: 4px;border-radius:4px;background-color:#54FD74;border:1px solid white",
					offline_css:"-moz-border-radius: 4px;-webkit-border-radius: 4px;border-radius:4px;background-color:transparent;border:1px solid#aaaaaa",
					busy_css:"-moz-border-radius: 4px;-webkit-border-radius: 4px;border-radius:4px;background-color:yellow;border:1px solid white",
					blocked_css:"-moz-border-radius: 4px;-webkit-border-radius: 4px;border-radius:4px;background-color:#FF8380;border:1px solid white"
				},	
				profile_star:{
					css:"font-size:1.333em;font-family:courier;font-weight:bold;color:yellow;"
				},
				font:{
					family:"arial",
					size:8,
					weight:500,
					style:{
						user_info_css:"color:#888888",
						info:"color:gray;font-style:italic;",
						secondary_link_css:"color:#528DC4;text-decoration:none;",
						mod_css:"color:#777777",
						title_css:"color:#294975"
					},
					screen_name_states:{
						online:{
							link_css:"color:#444444;text-decoration:none;",
							visited_css:"color:#FDF5E6;text-decoration:none;",
							hover_css:"color:#FFFF00;text-decoration:none;",
							blocked:{
								link_css:"color:#CC0000;text-decoration:none;",
								visited_css:"color:red;text-decoration:none;",
								hover_css:"color:#DF96A1;text-decoration:none;"
							}
						},
						offline:{
							link_css:"color:#444444;text-decoration:none;",
							visited_css:"color:#B0E0E6;text-decoration:none;",
							hover_css:"color:#ADD8E6;text-decoration:none;",
							blocked:{
								link_css:"color:#CC0000;text-decoration:none;",
								visited_css:"color:red;text-decoration:none;",
								hover_css:"color:#DF96A1;text-decoration:none;"
							}
						}
					}
				}
			},
			send_chat_panel:{
				width_offset:-6,
				height_offset:-8,
				height:24,
				css:"padding:4px 3px;font-size:9pt;font-family:arial;color:black;background-color:#dddddd;border:1px solid #2E9FFF;"
			},
			send_to_panel:{
				css:"background-color:#d3d3d3;padding-top:1px;padding-bottom:0px;border:1px solid gray;box-shadow: 0px 5px 9px #bbbbbb inset;-moz-box-shadow: 0px 5px 9px #bbbbbb inset;-webkit-box-shadow: 0px 5px 9px #bbbbbb inset;",
				text_css:"font:12px arial;color:#444444",
				remove_button_css:"padding:0px 4px 0px 4px;color: red; font-size: 8pt; font-weight: bold; font-stretch:wider;text-decoration: none;text-align:top;text-decoration:none"
			},
			user_pop_up_panel:{
				border:"1px solid silver",
				background_color:"#dddddd",
				opacity:1,
				font:{
					screen_name_css:"font-weight:bold;font-size:9pt;color:green;font-style:italic;",
					links_css:"text-decoration:none;font-family:arial;font-size:9pt;color:#528DC4;",
					functions_css:"font-family:arial;color:#444444;font-size:9pt;",
					smalltext_css:"font-family:arial;color:#444444;font-size:7pt;"
				},
				dividing_line:"1px dotted black",
				widgets:{
					border:{
						link_css:"border:1px solid #666666",
						hover_css:"border:1px solid lightblue"
					}
				},
				send_chat_panel:{
					css:"font-size:9pt;font-family:arial;color:black;background-color:#f3f3f3;border:1px solid #aaaaaa;"
				},
				send_private_button:{
					default_css:"background-color:#cfcfcf;border:1px solid #bcbcbc; border-bottom:1px solid #a9a9a9;padding:2px 8px; font:12px arial;-moz-border-radius: 2px;-webkit-border-radius: 2px;border-radius:2px;",
					states:{
						link_css:"color:#163663",
						hover_css:"color:white;text-decoration:none;background-color:#cfcfcf;border:1px solid #bcbcbc; border-bottom:1px solid #a9a9a9;",
						disabled_css:"color:#aaaaaa;border:1px solid #acacac;background-color:#d3d3d3;"
					}
				}
			},
			options_panel:{
				outer_border:"1px solid #444444",
				inner_border:"1px solid #aaa",
				background_color:"#dddddd",
				panel_font_css: "color:#528DC4;font-family:arial;font-weight:bold;font-style:italic;font-size:12px",
				infobox:{
					font_css:"color:#444;font-size:12px;text-decoration:none",
					border:"4px solid silver",
					triangle_color:"gray"
				},
				functions:{
					font_css:"color:#444;font-size:12px;text-decoration:none",
					border:"1px solid #bbb"
				},
				selectors:{
					border:{"border":"4px solid silver"},
					background_color:"#ddd",
					hover_color:"#lightblue",
					selected_color:"#ccc",
					font_css:"color:#333333;font-family:arial;font-weight:normal;font-size:10px",
					separator:"1px solid silver"
				},
				//the corresponding language names are in the language template
				translation_selector:{
					css:"margin-left:20px;border:4px solid lightblue;-moz-border-radius:5px;-webkit-border-radius:5px;border-radius:5px;",
					language_codes:["_off","ar","bg","ca","zh-CHS","zh-CHT","cs","da","nl","en","et","fi","fr","de","el","ht","he","hu","id","it","ja","ko","lv","lt","no","pl","pt","ro","ru","sk","sl","es","sv","th","tr","uk","vi"]
				},
				font_size_selector:{
					smallest:6,
					largest:16
				},
				//the corresponding color names are in the language template
				color_selector:{
					color_values:["#444444","black","blue","red","purple","green","yellow","orange","white"]
				},
				buttons:{
					default_css:"background-color:#cfcfcf;border:1px solid #bcbcbc; border-bottom:1px solid #a9a9a9;padding:2px 8px; font:12px arial;-moz-border-radius: 2px;-webkit-border-radius: 2px;border-radius:2px;",
					states:{
						link_css:"color:#163663",
						hover_css:"color:white;text-decoration:none;background-color:#cfcfcf;border:1px solid #bcbcbc; border-bottom:1px solid #a9a9a9;",
						disabled_css:"color:#aaaaaa;border:1px solid #acacac;background-color:#d3d3d3;"
					}
				}
			},
			tools_panel:{
				border:".083em solid #444444",
				background_color:"#dddddd",
				smileys:{
					width:250,
					height:200
				},
				icons:{
					width:250,
					height:25
				}
			},
			chatrooms_panel:{
				selected_color:"lightblue",
				hover_color:"#999999",
				background_color:"transparent",
				horizontal_rule:"font-weight:bold;font-size:16px;border-bottom:2px solid silver;",
				separator:"1px solid #8b8b9b;",
				room_name_font_css:"font-size:14px;font-weight:bold;color:white;",
				font_css:"color:white;font-family:arial;font-weight:normal;font-size:12px;",
				count_font_css:"font-size:14px;color:cyan;font-weight:bold;",
				disabled_room_name_font_css:"font-size:14px;font-weight:bold;color:#8888aa;",
				exit_room_link_disabled_css:"color:#eeeeee;",
				room_passwords:{
					font:{
						textfield_description_css:"font-family:arial;font-size:12px;color:#eeeeee;font-style:italic;font-weight:bold;"
					},
					textfield_css:"background-color:#eeeeee;border:1px solid #444444;padding:5px;color:#444444"
				}
			},
			info_panel:{
				background_color:"transparent",
				font_css:"color:white",
				link_css:"color:#528DC4",
				url_css:"color:lightblue",
				user_info_css:"color:gray",
				info_css:"color:lightgray",
				screen_name_css:"font-family:arial;font-size:10pt;color:cyan;font-weight:700;text-decoration:none;",
				list_divider_css:"border-bottom:1px solid #8b8b9b;"
			},
			login_panel:{
				box_shadow:"0px 0px 12px 2px rgba(0,0,0,0.5)",
				background_color:"#eeeeee",
				border:"2px solid #666666",
				font:{
					textfield_description_css:{"font-family":"arial","font-size":"10pt",color:"black","font-style":"italic","font-weight":"bold"},
					smalltext_css:{"margin-right":"10px","font-family":"arial","font-size":"10pt",color:"black"}
				},
				textfield_css:"background-color:#dddddd !important;color:#444444 !important;width:180px !important;height:18px !important;"
			},
			edit_room_panel:{
				font:{
					title_css:"font-style:italic;font-weight:bold;margin-right:10px;font-family:arial;font-size:14px;color:#eeeeee;",
					textfield_description_css:"font-family:arial;font-size:12px;color:#eeeeee;font-style:italic;font-weight:bold;",
					smalltext_css:"font-style:italic;font-weight:bold;margin-right:10px;font-family:arial;font-size:10px;color:#eeeeee;"
				},
				textfield_css:"background-color:#eeeeee;border:1px solid #444444;padding:5px;color:#444444"
			},
			alert_panel:{
				background_color:"#dddddd",
				border:"1px solid black",
				font:{
					text_css:"margin-right:10px;font-family:arial;font-size:9pt;color:black;"
				}
			}
		}
	},
	profile:{
		background:"#eeeeee",
		textColor:{
			title:"black",
			main:"#666666",
			loading:"green",
			saving:"red",
			saved:"green"
		},
		separator:"2px solid #A91905;"
	},
	uploads:{
		body:"background-color:#7b7b8b;color:#f6f6f9;line-height:1.4;font-size:12px;font-family:arial;",
		container:"border-bottom: #2E9FFF 2px solid;"
	},
	avatars:{
		body:"background-color:#7b7b8b;color:#f6f6f9;line-height:1.4;font-size:12px;font-family:arial;",
		link:"color:#72aDe4",
		container:"border-bottom: #2E9FFF 2px solid;",
		option:"background-color:#6b6b7b;border:0px solid #dddddd;padding:6px;"
	},
	split_screen:{
		background_color:"lightgray"
	}
};
/*Apply style overrides*/
FCChatConfig.overrides.application_overrides();
}());
