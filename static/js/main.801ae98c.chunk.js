(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{1:function(t,e,i){t.exports={statistics_option_list:"Statistics_statistics_option_list__3JFUL",statistics_option_list_item:"Statistics_statistics_option_list_item__clTA8",statistics_option_list_item_date:"Statistics_statistics_option_list_item_date__2SSHo"}},16:function(t,e,i){},19:function(t,e,i){"use strict";i.r(e);var s=i(2),a=i(6),c=i.n(a),n=i(7),o=i(8),l=i(11),r=i(10),_=(i(16),i(1)),d=i.n(_),b=i(0),u=function(t){var e=t.good,i=t.neutral,s=t.bad,a=t.total,c=t.positivePercentage;return Object(b.jsx)("div",{className:d.a.statistics,children:Object(b.jsxs)("ul",{className:d.a.statistics_option_list,children:[Object(b.jsx)("li",{className:d.a.statistics_option_list_item,children:Object(b.jsxs)("p",{className:d.a.statistics_option_item_date,children:["Good:",e]})}),Object(b.jsx)("li",{className:d.a.statistics_option_list_item,children:Object(b.jsxs)("p",{className:d.a.statistics_option_item_date,children:["Neutral:",i]})}),Object(b.jsx)("li",{className:d.a.statistics_option_list_item,children:Object(b.jsxs)("p",{className:d.a.statistics_option_item_date,children:["Bad:",s]})}),Object(b.jsx)("li",{className:d.a.statistics_option_list_item,children:Object(b.jsxs)("p",{className:d.a.statistics_option_item_date,children:["Total:",a]})}),Object(b.jsx)("li",{className:d.a.statistics_option_list_item,children:Object(b.jsxs)("p",{className:d.a.statistics_option_item_date,children:["Positive feedback:",e>0?c:0,"%"]})})]})})},j=i(4),p=i.n(j),h=function(t){var e=t.title,i=t.children;return Object(b.jsxs)("section",{className:p.a.section,children:[Object(b.jsx)("h2",{className:p.a.section_title,children:e}),i]})},m=i(5),O=i.n(m),f=function(t){var e=t.options,i=t.onLeaveFeedback;return Object(b.jsx)("div",{className:O.a.feedbackOptions,children:e.map((function(t){return Object(b.jsx)("button",{className:O.a.feedbackOptions_button,type:"button",onClick:i,children:t},t)}))})},x=i(9),k=i.n(x),v=function(t){var e=t.message;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("p",{className:k.a.notification,children:e})})},g=function(t){Object(l.a)(i,t);var e=Object(r.a)(i);function i(){var t;Object(n.a)(this,i);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={good:0,neutral:0,bad:0},t.countFeedback=function(e){t.setState((function(t){return"Good"===e.target.textContent?{good:t.good+1}:"Neutral"===e.target.textContent?{neutral:t.neutral+1}:"Bad"===e.target.textContent?{bad:t.bad+1}:void 0}))},t.countTotalFeedback=function(){return t.total=Object.values(t.state).reduce((function(t,e){return t+e})),t.total},t.countPositiveFeedbackPercentage=function(){return t.positivePercentage=Math.round(t.state.good/t.total*100),t.positivePercentage},t}return Object(o.a)(i,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(h,{title:"Please leave feedback",children:Object(b.jsx)(f,{options:["Good","Neutral","Bad"],onLeaveFeedback:this.countFeedback})}),Object(b.jsx)(h,{title:"Statistics",children:this.countTotalFeedback()>0?Object(b.jsx)(u,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(b.jsx)(v,{message:"No feedback given"})})]})}}]),i}(s.Component);i(18);c.a.render(Object(b.jsx)(g,{}),document.getElementById("root"))},4:function(t,e,i){t.exports={section:"Section_section__1yzAa",section_title:"Section_section_title__1_3x0"}},5:function(t,e,i){t.exports={feedbackOptions:"FeedbackOptions_feedbackOptions__RMZR7",feedbackOptions_button:"FeedbackOptions_feedbackOptions_button__qOpxL"}},9:function(t,e,i){t.exports={notification:"Notification_notification__23zYt"}}},[[19,1,2]]]);
//# sourceMappingURL=main.801ae98c.chunk.js.map