"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[201],{4201:function(s,e,t){t.r(e),t.d(e,{default:function(){return U}});var i=t(1413),r=t(5671),n=t(3144),o=t(136),a=t(5716),l=t(2791),u=t(364),c=t(81),d=t(885),h="ProfileInfo_descriptionBlock__70nUW",p="ProfileInfo_mainPhoto__YbjuG",f="ProfileInfo_contact__99k4s",x=t(4374),j=t(184),m=function(s){var e=(0,l.useState)(!1),t=(0,d.Z)(e,2),i=t[0],r=t[1],n=(0,l.useState)(s.status),o=(0,d.Z)(n,2),a=o[0],u=o[1];(0,l.useEffect)((function(){u(s.status)}),[s.status]);return(0,j.jsxs)("div",{children:[!i&&(0,j.jsxs)("div",{children:[(0,j.jsx)("b",{children:"Status: "})," ",(0,j.jsx)("span",{onDoubleClick:function(){r(!0)},children:a||"---------"})]}),i&&(0,j.jsx)("div",{children:(0,j.jsx)("input",{onChange:function(s){u(s.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),s.updateStatus(a)},value:a})})]})},v=t(4353),b=t(1117),g=t(704),k=t(9234),P=(0,g.Z)({form:"edit-profile"})((function(s){var e=s.handleSubmit,t=s.profile,i=s.error;return(0,j.jsxs)("form",{onSubmit:e,children:[(0,j.jsx)("div",{children:(0,j.jsx)("button",{children:"Save"})}),i&&(0,j.jsx)("div",{className:k.Z.formSummaryError,children:i}),(0,j.jsxs)("div",{children:[(0,j.jsx)("b",{children:"Full name"}),": ",(0,b.Gr)("Full name","fullName",[],b.II)]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("b",{children:"Looking for a job"}),": ",(0,b.Gr)("","lookingForAJob",[],b.II,{type:"checkbox"})]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("b",{children:"My professional skills"}),": ",(0,b.Gr)("My professional skills","lookingForAJobDescription",[],b.gx)]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("b",{children:"About me"}),": ",(0,b.Gr)("About me","aboutMe",[],b.gx)]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("b",{children:"Contacts"}),": ",Object.keys(t.contacts).map((function(s){return(0,j.jsx)("div",{className:f,children:(0,j.jsxs)("b",{children:[s,": ",(0,b.Gr)(s,"contacts."+s,[],b.II)]})},s)}))]})]})})),S=function(s){var e=s.profile,t=s.status,i=s.updateStatus,r=s.isOwner,n=s.savePhoto,o=s.saveProfile,a=(0,l.useState)(!1),u=(0,d.Z)(a,2),c=u[0],f=u[1];if(!e)return(0,j.jsx)(x.p,{});return(0,j.jsx)("div",{children:(0,j.jsxs)("div",{className:h,children:[(0,j.jsx)("img",{src:e.photos.large||v,alt:"Large profile photo",className:p}),r&&(0,j.jsx)("input",{type:"file",onChange:function(s){var e;null!==(e=s.currentTarget.files)&&void 0!==e&&e.length&&n(s.currentTarget.files[0])}}),c?(0,j.jsx)(P,{initialValues:e,profile:e,onSubmit:function(s){o(s).then((function(){f(!1)}))}}):(0,j.jsx)(_,{profile:e,isOwner:r,goToEditMode:function(){return f(!0)}}),(0,j.jsx)(m,{status:t,updateStatus:i})]})})},_=function(s){var e=s.profile,t=s.isOwner,i=s.goToEditMode;return(0,j.jsxs)("div",{children:[t&&(0,j.jsx)("div",{children:(0,j.jsx)("button",{onClick:i,children:"Edit"})}),(0,j.jsxs)("div",{children:[(0,j.jsx)("b",{children:"Full name"}),": ",e.fullName]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("b",{children:"Looking for a job"}),": ",e.lookingForAJob?"yes":"no"]}),e.lookingForAJob&&(0,j.jsxs)("div",{children:[(0,j.jsx)("b",{children:"My professional skills"}),": ",e.lookingForAJobDescription]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("b",{children:"About me"}),": ",e.aboutMe]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("b",{children:"Contacts"}),": ",Object.keys(e.contacts).map((function(s){return(0,j.jsx)(y,{contactTitle:s,contactValue:e.contacts[s]},s)}))]})]})},y=function(s){var e=s.contactTitle,t=s.contactValue;return(0,j.jsxs)("div",{className:f,children:[(0,j.jsx)("b",{children:e}),": ",t]})},I="Posts_postsBlock__IWtKM",Z="Posts_posts__ajylT",w="Post_item__ZxQRY",C=function(s){return(0,j.jsxs)("div",{className:w,children:[(0,j.jsx)("img",{src:"https://asset.kompas.com/crops/-QSHMGMmRvrDcDZeZbRh0wrk4NM=/0x81:466x391/750x500/data/photo/2023/11/09/654c73dbe7559.jpg",alt:"Avatar"}),s.message,(0,j.jsx)("div",{children:(0,j.jsx)("span",{children:"Like"})}),(0,j.jsxs)("div",{children:["Likes: ",s.likesCount]})]})},N=t(6139),A=t(3079),M=(0,A.D)(10),F=(0,g.Z)({form:"ProfileAddNewPostForm"})((function(s){return(0,j.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,j.jsx)("div",{children:(0,j.jsx)(N.Z,{name:"newPostText",component:b.gx,validate:[A.C,M],placeholder:"Post message"})}),(0,j.jsxs)("div",{children:[(0,j.jsx)("button",{children:"Remove"}),(0,j.jsx)("button",{children:"Add post"})]})]})})),T=(0,l.memo)((function(s){var e=s.posts.map((function(s){return(0,j.jsx)(C,{id:s.id,message:s.message,likesCount:s.likesCount},s.id)}));return(0,j.jsxs)("div",{className:I,children:[(0,j.jsx)("h3",{children:"My posts"}),(0,j.jsx)(F,{onSubmit:function(e){s.addPost(e.newPostText)}}),(0,j.jsx)("div",{className:Z,children:e})]})})),D=(0,u.$j)((function(s){return{posts:s.profilePage.posts}}),(function(s){return{addPost:function(e){s((0,c.Wl)(e))}}}))(T),O=function(s){return(0,j.jsxs)("div",{children:[(0,j.jsx)(S,{savePhoto:s.savePhoto,isOwner:s.isOwner,profile:s.profile,status:s.status,saveProfile:s.saveProfile,updateStatus:s.updateStatus}),(0,j.jsx)(D,{})]})},G=t(9271),E=t(7781),J=function(s){(0,o.Z)(t,s);var e=(0,a.Z)(t);function t(){return(0,r.Z)(this,t),e.apply(this,arguments)}return(0,n.Z)(t,[{key:"refreshProfile",value:function(){var s=this.props.match.params.userId;s||(s=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(s),this.props.getStatus(s)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(s,e,t){this.props.match.params.userId!==s.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,j.jsx)(O,(0,i.Z)((0,i.Z)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),t}(l.Component),U=(0,E.qC)((0,u.$j)((function(s){return{profile:s.profilePage.profile,status:s.profilePage.status,authorizedUserId:s.auth.userId,isAuth:s.auth.isAuth}}),{getUserProfile:c.et,getStatus:c.lR,updateStatus:c.Nf,savePhoto:c.Ju,saveProfile:c.Ii}),G.EN)(J)}}]);
//# sourceMappingURL=201.b0aedc28.chunk.js.map