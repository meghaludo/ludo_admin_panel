"use strict";(self.webpackChunkadmin_pro_angular_lite=self.webpackChunkadmin_pro_angular_lite||[]).push([[402],{7402:(k,h,d)=>{d.r(h),d.d(h,{ComponentsModule:()=>W});var _=d(3365),c=d(4755),u=d(5030),l=d(221),g=d(8694),t=d(9523),m=d(519),p=d(9317);function Z(n,o){1&n&&(t.TgZ(0,"span",15),t._uU(1,"Active"),t.qZA())}function b(n,o){1&n&&(t.TgZ(0,"span",16),t._uU(1,"InActive"),t.qZA())}function U(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t.YNc(12,Z,2,0,"span",9),t.YNc(13,b,2,0,"span",10),t.qZA(),t.TgZ(14,"td")(15,"div",11)(16,"button",12),t._uU(17," Status Change "),t.qZA(),t.TgZ(18,"div",13)(19,"button",14),t.NdJ("click",function(){const a=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.statusChange(null==a?null:a.id,1))}),t._uU(20,"Active"),t.qZA(),t.TgZ(21,"button",14),t.NdJ("click",function(){const a=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.statusChange(null==a?null:a.id,0))}),t._uU(22,"InActive"),t.qZA()()()()()}if(2&n){const e=o.$implicit,i=o.index;t.xp6(2),t.hij(" ",i+1," "),t.xp6(2),t.hij(" ",(null==e?null:e.full_name)||"-"," "),t.xp6(2),t.hij(" ",(null==e?null:e.mobile_no)||"-"," "),t.xp6(2),t.hij(" ",(null==e?null:e.email)||"-"," "),t.xp6(2),t.hij(" Rs. ",(null==e?null:e.amount)||"0"," "),t.xp6(2),t.Q6J("ngIf",1==(null==e?null:e.status)),t.xp6(1),t.Q6J("ngIf",0==(null==e?null:e.status))}}let f=(()=>{class n{constructor(e,i){this.generalService=e,this.notificationService=i,this.isCollapsed=!1,this.isCollapsed2=!1,this.collapsed=!0,this.userList=[]}ngOnInit(){this.getUserList()}getUserList(){this.userList=[],this.generalService.getUserList().subscribe(e=>{e?.status==g.M?(this.userList=e?.payload?.data,this.userList=this.userList.reverse(),console.log("this.userList",this.userList)):this.notificationService.showError("Error")},e=>{this.notificationService.showError(e?.message||"Something Went Wrong")})}statusChange(e,i){console.log("status change",i),this.generalService.changeUerStatus({id:e,status:i}).subscribe(s=>{s?.status==g.M?(this.getUserList(),this.notificationService.showSuccess(s?.message||"User Status Updated")):this.notificationService.showError("Error")},s=>{this.notificationService.showError(s?.message||"Something Went Wrong")})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m.m),t.Y36(p.g))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-table"]],standalone:!0,features:[t.jDz],decls:26,vars:1,consts:[[1,"row"],[1,"col-12"],[1,"card"],[1,"card-body"],[1,"card-title"],[1,"table-responsive"],[1,"table","table-hover","align-middle","text-nowrap","table-bordered"],[1,"text-dark","font-medium","fs-4"],[4,"ngFor","ngForOf"],["class","mb-1 me-2 badge font-medium bg-light-success text-success",4,"ngIf"],["class","mb-1 me-2 badge font-medium bg-light-danger text-danger",4,"ngIf"],["ngbDropdown","",1,"d-inline-block"],["id","dropdown1","ngbDropdownToggle","",1,"btn","btn-secondary","d-flex","align-items-center"],["ngbDropdownMenu","","aria-labelledby","dropdown1"],[1,"dropdown-item",3,"click"],[1,"mb-1","me-2","badge","font-medium","bg-light-success","text-success"],[1,"mb-1","me-2","badge","font-medium","bg-light-danger","text-danger"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5,"User List"),t.qZA(),t.TgZ(6,"div",5)(7,"table",6)(8,"thead")(9,"tr")(10,"th",7),t._uU(11,"#"),t.qZA(),t.TgZ(12,"th",7),t._uU(13,"Full Name"),t.qZA(),t.TgZ(14,"th",7),t._uU(15,"Mobile Number"),t.qZA(),t.TgZ(16,"th",7),t._uU(17,"Email"),t.qZA(),t.TgZ(18,"th",7),t._uU(19,"Amount"),t.qZA(),t.TgZ(20,"th",7),t._uU(21,"Status"),t.qZA(),t.TgZ(22,"th",7),t._uU(23,"Action"),t.qZA()()(),t.TgZ(24,"tbody"),t.YNc(25,U,23,7,"tr",8),t.qZA()()()()()()()),2&e&&(t.xp6(25),t.Q6J("ngForOf",i.userList))},dependencies:[c.ax,l.XC,l.jt,l.iD,l.Vi,l.IJ,l.lQ,c.O5],styles:["td[_ngcontent-%COMP%]{padding:5px!important}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:center}thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background-color:#b1d5f5}"]}),n})();function C(n,o){1&n&&(t.TgZ(0,"span",16),t._uU(1,"Verify"),t.qZA())}function T(n,o){1&n&&(t.TgZ(0,"span",17),t._uU(1,"Decline"),t.qZA())}function w(n,o){1&n&&(t.TgZ(0,"span",18),t._uU(1,"Pending"),t.qZA())}function A(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t.YNc(10,C,2,0,"span",9),t.YNc(11,T,2,0,"span",10),t.YNc(12,w,2,0,"span",11),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.ALo(15,"date"),t.qZA(),t.TgZ(16,"td")(17,"div",12)(18,"button",13),t._uU(19," Status Change "),t.qZA(),t.TgZ(20,"div",14)(21,"button",15),t.NdJ("click",function(){const a=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.statusChange(null==a?null:a.id,1))}),t._uU(22,"Verify"),t.qZA(),t.TgZ(23,"button",15),t.NdJ("click",function(){const a=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.statusChange(null==a?null:a.id,2))}),t._uU(24,"Decline"),t.qZA(),t.TgZ(25,"button",15),t.NdJ("click",function(){const a=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.statusChange(null==a?null:a.id,0))}),t._uU(26,"Pending"),t.qZA()()()()()}if(2&n){const e=o.$implicit,i=o.index;t.xp6(2),t.hij(" ",i+1," "),t.xp6(2),t.hij(" ",null==e||null==e.userDetail?null:e.userDetail.full_name," "),t.xp6(2),t.hij(" ",null==e||null==e.userDetail?null:e.userDetail.mobile_no," "),t.xp6(2),t.hij(" Rs. ",(null==e?null:e.amount)||"0"," "),t.xp6(2),t.Q6J("ngIf",1==(null==e?null:e.status)),t.xp6(1),t.Q6J("ngIf",2==(null==e?null:e.status)),t.xp6(1),t.Q6J("ngIf",0==(null==e?null:e.status)),t.xp6(2),t.hij(" ",t.xi3(15,8,null==e?null:e.created_on,"dd/MM/yyyy")," ")}}function v(n,o){1&n&&(t.TgZ(0,"span",16),t._uU(1,"Verify"),t.qZA())}function y(n,o){1&n&&(t.TgZ(0,"span",17),t._uU(1,"Decline"),t.qZA())}function q(n,o){1&n&&(t.TgZ(0,"span",18),t._uU(1,"Pending"),t.qZA())}function M(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t.YNc(10,v,2,0,"span",9),t.YNc(11,y,2,0,"span",10),t.YNc(12,q,2,0,"span",11),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.ALo(15,"date"),t.qZA(),t.TgZ(16,"td")(17,"div",12)(18,"button",13),t._uU(19," Status Change "),t.qZA(),t.TgZ(20,"div",14)(21,"button",15),t.NdJ("click",function(){const a=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.statusChange(null==a?null:a.id,1))}),t._uU(22,"Verify"),t.qZA(),t.TgZ(23,"button",15),t.NdJ("click",function(){const a=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.statusChange(null==a?null:a.id,2))}),t._uU(24,"Decline"),t.qZA(),t.TgZ(25,"button",15),t.NdJ("click",function(){const a=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.statusChange(null==a?null:a.id,0))}),t._uU(26,"Pending"),t.qZA()()()()()}if(2&n){const e=o.$implicit,i=o.index;t.xp6(2),t.hij(" ",i+1," "),t.xp6(2),t.hij(" ",null==e||null==e.userDetail?null:e.userDetail.full_name," "),t.xp6(2),t.hij(" ",null==e||null==e.userDetail?null:e.userDetail.mobile_no," "),t.xp6(2),t.hij(" Rs. ",(null==e?null:e.amount)||"0"," "),t.xp6(2),t.Q6J("ngIf",1==(null==e?null:e.status)),t.xp6(1),t.Q6J("ngIf",2==(null==e?null:e.status)),t.xp6(1),t.Q6J("ngIf",0==(null==e?null:e.status)),t.xp6(2),t.hij(" ",t.xi3(15,8,null==e?null:e.created_on,"dd/MM/yyyy")," ")}}function S(n,o){1&n&&(t.TgZ(0,"span",22),t._uU(1,"Active"),t.qZA())}function O(n,o){1&n&&(t.TgZ(0,"span",23),t._uU(1,"InActive"),t.qZA())}function I(n,o){1&n&&(t.TgZ(0,"span",17),t._uU(1,"Running"),t.qZA())}function E(n,o){1&n&&(t.TgZ(0,"span",18),t._uU(1,"Completed"),t.qZA())}function H(n,o){1&n&&(t.TgZ(0,"span",19),t._uU(1,"Waiting"),t.qZA())}function N(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td",9),t._uU(10),t.qZA(),t.TgZ(11,"td",10),t._uU(12),t.qZA(),t.TgZ(13,"td",11),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.ALo(17,"date"),t.qZA(),t.TgZ(18,"td"),t.YNc(19,I,2,0,"span",12),t.YNc(20,E,2,0,"span",13),t.YNc(21,H,2,0,"span",14),t.qZA(),t.TgZ(22,"td")(23,"div",15)(24,"button",16),t.NdJ("click",function(){const a=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.showDetails(null==a?null:a.id))}),t._uU(25,"View"),t.qZA()()()()}if(2&n){const e=o.$implicit,i=o.index;t.xp6(2),t.hij(" ",i+1," "),t.xp6(2),t.hij(" ",(null==e||null==e.playerOne?null:e.playerOne.ludo_name)||"-"," "),t.xp6(2),t.hij(" ",(null==e||null==e.playerTwo?null:e.playerTwo.ludo_name)||"-"," "),t.xp6(2),t.hij(" ",(null==e?null:e.game_owner_id)||"-"," "),t.xp6(2),t.hij(" Rs. ",(null==e?null:e.amount)||"0"," "),t.xp6(2),t.hij(" Rs. ",(null==e?null:e.winner_amount)||"0"," "),t.xp6(2),t.hij(" Rs. ",(null==e?null:e.owner_commision)||"0"," "),t.xp6(2),t.hij(" ",t.xi3(17,11,null==e?null:e.created_on,"dd/MM/YYYY")," "),t.xp6(3),t.Q6J("ngIf",1==(null==e?null:e.is_running)),t.xp6(1),t.Q6J("ngIf",2==(null==e?null:e.is_running)),t.xp6(1),t.Q6J("ngIf",0==(null==e?null:e.is_running))}}const J=[{path:"",children:[{path:"user-list",component:f},{path:"user-payment",component:(()=>{class n{constructor(e,i){this.generalService=e,this.notificationService=i,this.isCollapsed=!1,this.isCollapsed2=!1,this.collapsed=!0,this.walletHistory=[]}ngOnInit(){this.getWalletHistory()}getWalletHistory(){this.walletHistory=[],this.generalService.getUserWalletList().subscribe(e=>{e?.status==g.M?(this.walletHistory=e?.payload?.data,this.walletHistory=this.walletHistory.reverse(),console.log("this.userList",this.walletHistory)):this.notificationService.showError("Error")},e=>{this.notificationService.showError(e?.message||"Something Went Wrong")})}statusChange(e,i){console.log("status change",i),this.generalService.changeWalletStatus({id:e,status:i}).subscribe(s=>{s?.status==g.M?(this.getWalletHistory(),this.notificationService.showSuccess(s?.message||"User Status Updated")):this.notificationService.showError("Error")},s=>{this.notificationService.showError(s?.message||"Something Went Wrong")})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m.m),t.Y36(p.g))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-user-payment"]],standalone:!0,features:[t.jDz],decls:26,vars:1,consts:[[1,"row"],[1,"col-12"],[1,"card"],[1,"card-body"],[1,"card-title"],[1,"table-responsive"],[1,"table","table-hover","align-middle","text-nowrap","table-bordered"],[1,"text-dark","font-medium","fs-4"],[4,"ngFor","ngForOf"],["class","mb-1 me-2 badge font-medium bg-light-success text-success",4,"ngIf"],["class","mb-1 me-2 badge font-medium bg-light-danger text-danger",4,"ngIf"],["class","mb-1 me-2 badge font-medium bg-light-warning text-warning",4,"ngIf"],["ngbDropdown","",1,"d-inline-block"],["id","dropdown1","ngbDropdownToggle","",1,"btn","btn-secondary","d-flex","align-items-center"],["ngbDropdownMenu","","aria-labelledby","dropdown1"],[1,"dropdown-item",3,"click"],[1,"mb-1","me-2","badge","font-medium","bg-light-success","text-success"],[1,"mb-1","me-2","badge","font-medium","bg-light-danger","text-danger"],[1,"mb-1","me-2","badge","font-medium","bg-light-warning","text-warning"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5,"User Payment List"),t.qZA(),t.TgZ(6,"div",5)(7,"table",6)(8,"thead")(9,"tr")(10,"th",7),t._uU(11,"#"),t.qZA(),t.TgZ(12,"th",7),t._uU(13,"Full Name"),t.qZA(),t.TgZ(14,"th",7),t._uU(15,"Mobile Number"),t.qZA(),t.TgZ(16,"th",7),t._uU(17,"Amount"),t.qZA(),t.TgZ(18,"th",7),t._uU(19,"Status"),t.qZA(),t.TgZ(20,"th",7),t._uU(21,"Date"),t.qZA(),t.TgZ(22,"th",7),t._uU(23,"Action"),t.qZA()()(),t.TgZ(24,"tbody"),t.YNc(25,A,27,11,"tr",8),t.qZA()()()()()()()),2&e&&(t.xp6(25),t.Q6J("ngForOf",i.walletHistory))},dependencies:[c.ez,c.sg,c.O5,c.uU,l.XC,l.jt,l.iD,l.Vi,l.IJ,l.lQ],styles:["tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:center}td[_ngcontent-%COMP%]{padding:5px!important}thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background-color:#b1d5f5}"]}),n})()},{path:"user-withdraw",component:(()=>{class n{constructor(e,i){this.generalService=e,this.notificationService=i,this.isCollapsed=!1,this.isCollapsed2=!1,this.collapsed=!0,this.withdrawHistory=[]}ngOnInit(){this.getWithdrawList()}getWithdrawList(){this.withdrawHistory=[],this.generalService.getUserWithdrawList().subscribe(e=>{e?.status==g.M?(this.withdrawHistory=e?.payload?.data,this.withdrawHistory=this.withdrawHistory.reverse(),console.log("this.userList",this.withdrawHistory)):this.notificationService.showError("Error")},e=>{this.notificationService.showError(e?.message||"Something Went Wrong")})}statusChange(e,i){console.log("status change",i),this.generalService.changeWithdrawStatus({id:e,status:i}).subscribe(s=>{s?.status==g.M?(this.getWithdrawList(),this.notificationService.showSuccess(s?.message||"User Status Updated")):this.notificationService.showError("Error")},s=>{this.notificationService.showError(s?.message||"Something Went Wrong")})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m.m),t.Y36(p.g))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-user-withdraw"]],standalone:!0,features:[t.jDz],decls:26,vars:1,consts:[[1,"row"],[1,"col-12"],[1,"card"],[1,"card-body"],[1,"card-title"],[1,"table-responsive"],[1,"table","table-hover","align-middle","text-nowrap","table-bordered"],[1,"text-dark","font-medium","fs-4"],[4,"ngFor","ngForOf"],["class","mb-1 me-2 badge font-medium bg-light-success text-success",4,"ngIf"],["class","mb-1 me-2 badge font-medium bg-light-danger text-danger",4,"ngIf"],["class","mb-1 me-2 badge font-medium bg-light-warning text-warning",4,"ngIf"],["ngbDropdown","",1,"d-inline-block"],["id","dropdown1","ngbDropdownToggle","",1,"btn","btn-secondary","d-flex","align-items-center"],["ngbDropdownMenu","","aria-labelledby","dropdown1"],[1,"dropdown-item",3,"click"],[1,"mb-1","me-2","badge","font-medium","bg-light-success","text-success"],[1,"mb-1","me-2","badge","font-medium","bg-light-danger","text-danger"],[1,"mb-1","me-2","badge","font-medium","bg-light-warning","text-warning"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5,"User Withdraw List"),t.qZA(),t.TgZ(6,"div",5)(7,"table",6)(8,"thead")(9,"tr")(10,"th",7),t._uU(11,"#"),t.qZA(),t.TgZ(12,"th",7),t._uU(13,"Full Name"),t.qZA(),t.TgZ(14,"th",7),t._uU(15,"Mobile Number"),t.qZA(),t.TgZ(16,"th",7),t._uU(17,"Amount"),t.qZA(),t.TgZ(18,"th",7),t._uU(19,"Status"),t.qZA(),t.TgZ(20,"th",7),t._uU(21,"Date"),t.qZA(),t.TgZ(22,"th",7),t._uU(23,"Action"),t.qZA()()(),t.TgZ(24,"tbody"),t.YNc(25,M,27,11,"tr",8),t.qZA()()()()()()()),2&e&&(t.xp6(25),t.Q6J("ngForOf",i.withdrawHistory))},dependencies:[c.ez,c.sg,c.O5,c.uU,l.XC,l.jt,l.iD,l.Vi,l.IJ,l.lQ],styles:["tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:center}td[_ngcontent-%COMP%]{padding:5px!important}thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background-color:#b1d5f5}"]}),n})()},{path:"contact-us",component:(()=>{class n{constructor(e,i){this.generalService=e,this.notificationService=i,this.email=new u.NI(""),this.intagram=new u.NI(""),this.telegram=new u.NI(""),this.whatsapp=new u.NI("")}ngOnInit(){this.getContactUsDetails()}getContactUsDetails(){this.generalService.getContactUsDetails().subscribe(e=>{e?.status==g.M&&(this.contactUsDetails=e?.payload?.data,this.email.setValue(this.contactUsDetails?.email||""),this.intagram.setValue(this.contactUsDetails?.intagram||""),this.telegram.setValue(this.contactUsDetails?.telegram||""),this.whatsapp.setValue(this.contactUsDetails?.whatsapp||""))},e=>{this.notificationService.showError("Error")})}addEditContactDetails(){const e={email:this.email.value||this.contactUsDetails.email,intagram:this.intagram.value||this.contactUsDetails.intagram,telegram:this.telegram.value||this.contactUsDetails.telegram,whatsapp:this.whatsapp.value||this.contactUsDetails.whatsapp};this.contactUsDetails?.id&&(e.id=this.contactUsDetails?.id),this.generalService.addEditContactUs(e).subscribe(i=>{i?.status==g.M?this.getContactUsDetails():this.notificationService.showError("Error")},i=>{this.notificationService.showError("Not updated contact us")})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m.m),t.Y36(p.g))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-contact-us"]],decls:64,vars:10,consts:[[1,"row"],[1,"col-12"],[1,"card"],[1,"card-body"],[1,"card-title"],[1,"row","table-responsive"],[1,"col-md-12","col-lg-6","mt-4"],[1,"form-group"],["for","exampleInputEmail1"],["type","email","id","exampleInputEmail1","placeholder","Enter email",1,"form-control",3,"formControl"],["for","intagram"],["type","text","id","intagram","placeholder","Enter Instagram account link",1,"form-control",3,"formControl"],["for","telegram"],["type","text","id","telegram","placeholder","Enter Telegram account link",1,"form-control",3,"formControl"],["for","whatsapp"],["type","text","id","whatsapp","placeholder","Enter WhatsApp number",1,"form-control",3,"formControl"],[1,"col-12","mt-2","text-end"],["type","button",1,"btn","btn-primary",3,"click"],[1,"table-responsive"],[1,"table","table-hover","align-middle","text-nowrap","table-bordered"],["class","mb-1 me-2 badge font-medium bg-light-success text-success",4,"ngIf"],["class","mb-1 me-2 badge font-medium bg-light-danger text-danger",4,"ngIf"],[1,"mb-1","me-2","badge","font-medium","bg-light-success","text-success"],[1,"mb-1","me-2","badge","font-medium","bg-light-danger","text-danger"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5,"Add Edit Contact Us"),t.qZA(),t.TgZ(6,"div",5)(7,"div",6)(8,"div",7)(9,"label",8),t._uU(10,"Email"),t.qZA(),t._UZ(11,"input",9),t.qZA()(),t.TgZ(12,"div",6)(13,"div",7)(14,"label",10),t._uU(15,"Instagram"),t.qZA(),t._UZ(16,"input",11),t.qZA()(),t.TgZ(17,"div",6)(18,"div",7)(19,"label",12),t._uU(20,"Telegram"),t.qZA(),t._UZ(21,"input",13),t.qZA()(),t.TgZ(22,"div",6)(23,"div",7)(24,"label",14),t._uU(25,"WhatsApp"),t.qZA(),t._UZ(26,"input",15),t.qZA()(),t.TgZ(27,"div",16)(28,"button",17),t.NdJ("click",function(){return i.addEditContactDetails()}),t._uU(29,"Save"),t.qZA()()()()()(),t.TgZ(30,"div",1)(31,"div",2)(32,"div",3)(33,"h4",4),t._uU(34,"Contact Us Details"),t.qZA(),t.TgZ(35,"div",18)(36,"table",19)(37,"tbody")(38,"tr")(39,"td"),t._uU(40,"Email : "),t.qZA(),t.TgZ(41,"td"),t._uU(42),t.qZA()(),t.TgZ(43,"tr")(44,"td"),t._uU(45,"Instagram : "),t.qZA(),t.TgZ(46,"td"),t._uU(47),t.qZA()(),t.TgZ(48,"tr")(49,"td"),t._uU(50,"Telegram : "),t.qZA(),t.TgZ(51,"td"),t._uU(52),t.qZA()(),t.TgZ(53,"tr")(54,"td"),t._uU(55,"WhatsApp : "),t.qZA(),t.TgZ(56,"td"),t._uU(57),t.qZA()(),t.TgZ(58,"tr")(59,"td"),t._uU(60,"Status : "),t.qZA(),t.TgZ(61,"td"),t.YNc(62,S,2,0,"span",20),t.YNc(63,O,2,0,"span",21),t.qZA()()()()()()()()()),2&e&&(t.xp6(11),t.Q6J("formControl",i.email),t.xp6(5),t.Q6J("formControl",i.intagram),t.xp6(5),t.Q6J("formControl",i.telegram),t.xp6(5),t.Q6J("formControl",i.whatsapp),t.xp6(16),t.Oqu(null==i.contactUsDetails?null:i.contactUsDetails.email),t.xp6(5),t.Oqu(null==i.contactUsDetails?null:i.contactUsDetails.intagram),t.xp6(5),t.Oqu(null==i.contactUsDetails?null:i.contactUsDetails.telegram),t.xp6(5),t.Oqu(null==i.contactUsDetails?null:i.contactUsDetails.whatsapp),t.xp6(5),t.Q6J("ngIf",1==(null==i.contactUsDetails?null:i.contactUsDetails.status)),t.xp6(1),t.Q6J("ngIf",0==(null==i.contactUsDetails?null:i.contactUsDetails.status)))},dependencies:[c.O5,u.Fj,u.JJ,u.oH]}),n})()},{path:"game-history",component:(()=>{class n{constructor(e,i,s){this.generalService=e,this.notificationService=i,this.router=s,this.gameHistory=[]}ngOnInit(){this.getGameHistory()}getGameHistory(){this.gameHistory=[],this.generalService.getGameHistory().subscribe(e=>{e?.status==g.M?(this.gameHistory=e?.payload?.data,console.log(this.gameHistory,"sdd")):this.notificationService.showError("Something went wrong")},e=>{this.notificationService.showError("Error")})}showDetails(e){this.router.navigateByUrl(`/component/game-detail/${e}`)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m.m),t.Y36(p.g),t.Y36(_.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-game-history"]],decls:34,vars:1,consts:[[1,"row"],[1,"col-12"],[1,"card"],[1,"card-body"],[1,"card-title"],[1,"table-responsive"],[1,"table","table-hover","align-middle","text-nowrap","table-bordered"],[1,"text-dark","font-medium","fs-4"],[4,"ngFor","ngForOf"],[1,"text-danger"],[1,"text-primary"],[1,"text-success",2,"font-weight","bold"],["class","mb-1 me-2 badge font-medium bg-light-info text-success",4,"ngIf"],["class","mb-1 me-2 badge font-medium bg-light-success text-danger",4,"ngIf"],["class","mb-1 me-2 badge font-medium bg-light-warning text-warning",4,"ngIf"],[1,"d-inline-block"],["type","button",1,"btn","btn-secondary","d-flex","align-items-center",3,"click"],[1,"mb-1","me-2","badge","font-medium","bg-light-info","text-success"],[1,"mb-1","me-2","badge","font-medium","bg-light-success","text-danger"],[1,"mb-1","me-2","badge","font-medium","bg-light-warning","text-warning"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5,"Game History"),t.qZA(),t.TgZ(6,"div",5)(7,"table",6)(8,"thead")(9,"tr")(10,"th",7),t._uU(11,"#"),t.qZA(),t.TgZ(12,"th",7),t._uU(13,"Player 1"),t.qZA(),t.TgZ(14,"th",7),t._uU(15,"Player 1"),t.qZA(),t.TgZ(16,"th",7),t._uU(17,"Winner"),t.qZA(),t.TgZ(18,"th",7),t._uU(19,"Amount"),t.qZA(),t.TgZ(20,"th",7),t._uU(21,"Winner "),t._UZ(22,"br"),t._uU(23," Amount"),t.qZA(),t.TgZ(24,"th",7),t._uU(25,"Commission"),t.qZA(),t.TgZ(26,"th",7),t._uU(27,"Date"),t.qZA(),t.TgZ(28,"th",7),t._uU(29,"Status"),t.qZA(),t.TgZ(30,"th",7),t._uU(31,"Action"),t.qZA()()(),t.TgZ(32,"tbody"),t.YNc(33,N,26,14,"tr",8),t.qZA()()()()()()()),2&e&&(t.xp6(33),t.Q6J("ngForOf",i.gameHistory))},dependencies:[c.sg,c.O5,c.uU],styles:["thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background-color:#b1d5f5}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(odd){background-color:#f5f5f5}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even){background-color:#fff}tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{text-align:center}td[_ngcontent-%COMP%]{padding:5px!important}"]}),n})()},{path:"profile",component:(()=>{class n{constructor(){this.full_name=new u.NI(""),this.mobile_no=new u.NI(""),this.email=new u.NI("")}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-admin-profile"]],decls:25,vars:3,consts:[[1,"row"],[1,"col-12"],[1,"card"],[1,"card-body"],[1,"card-title"],[1,"row","table-responsive"],[1,"col-md-12","col-lg-6","mt-4"],[1,"form-group"],["for","intagram"],["type","text","id","intagram","placeholder","Enter Full Name",1,"form-control",3,"formControl"],["for","whatsapp"],["type","text","id","whatsapp","placeholder","Enter Mobile Number",1,"form-control",3,"formControl"],["for","exampleInputEmail1"],["type","email","id","exampleInputEmail1","placeholder","Enter email",1,"form-control",3,"formControl"],[1,"col-12","mt-2","text-end"],["type","button",1,"btn","btn-primary"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5,"Add Edit Contact Us"),t.qZA(),t.TgZ(6,"div",5)(7,"div",6)(8,"div",7)(9,"label",8),t._uU(10,"Full Name"),t.qZA(),t._UZ(11,"input",9),t.qZA()(),t.TgZ(12,"div",6)(13,"div",7)(14,"label",10),t._uU(15,"Mobile Number"),t.qZA(),t._UZ(16,"input",11),t.qZA()(),t.TgZ(17,"div",6)(18,"div",7)(19,"label",12),t._uU(20,"Email"),t.qZA(),t._UZ(21,"input",13),t.qZA()(),t.TgZ(22,"div",14)(23,"button",15),t._uU(24,"Save"),t.qZA()()()()()()()),2&e&&(t.xp6(11),t.Q6J("formControl",i.full_name),t.xp6(5),t.Q6J("formControl",i.mobile_no),t.xp6(5),t.Q6J("formControl",i.email))},dependencies:[u.Fj,u.JJ,u.oH]}),n})()},{path:"game-detail/:id",component:(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-game-details"]],decls:2,vars:0,template:function(e,i){1&e&&(t.TgZ(0,"p"),t._uU(1,"game-details works!"),t.qZA())}}),n})()}]}];let W=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.ez,_.Bz.forChild(J),u.u5,u.UX,l.IJ,f]}),n})()}}]);