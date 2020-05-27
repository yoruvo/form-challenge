(this["webpackJsonpform-challenge"]=this["webpackJsonpform-challenge"]||[]).push([[0],{221:function(e){e.exports=JSON.parse('{"en":{"translation":{"english":"English","german":"German","footer":"Written by Ivan \\"yoruvo\\" Vidusenko. Find this project on <2>GitHub</2>","form":{"labels":{"name":"Name","email":"Email address","topic":"Topic","description":"Description","version":"Version","phone":"Phone number for the return call","submit":"Submit","reset":"Reset"},"validation":{"required":"This field is required.","emailInvalid":"Please enter a valid email address.","versionInvalid":"Please enter a valid version number.","phoneInvalid":"Please enter a valid phone number.","descriptionLength":"Please enter at least 10 characters."},"values":{"general":"General request","error":"Software error","call":"Return call"}},"results":{"title":"Submission successful","thankYou":"Thank you for your submission! Below, you can find your submitted values.","submission":"Form submission results","return":"Return to form","key":"Field","value":"Entry"}}},"de":{"translation":{"english":"Englisch","german":"Deutsch","footer":"Verfasst von Ivan \\"yoruvo\\" Vidusenko. Finde das Projekt auf <2>GitHub</2>","form":{"labels":{"name":"Name","email":"Emailadresse","topic":"Themenbereich","description":"Beschreibung","version":"Version","phone":"Telefonnummer f\xfcr den R\xfcckruf","submit":"Senden","reset":"Zur\xfccksetzen"},"validation":{"required":"Dieses Feld wird ben\xf6tigt.","emailInvalid":"Bitte tragen Sie eine g\xfcltige Emailadresse ein.","versionInvalid":"Bitte tragen Sie eine g\xfcltige Versionsnummer ein.","phoneInvalid":"Bitte tragen Sie eine g\xfcltige Telefonnummer ein.","descriptionLength":"Bitte tragen Sie mindestens 10 Zeichen ein."},"values":{"general":"Allgemeine Anfrage","error":"Softwarefehler","call":"R\xfcckruf"}},"results":{"title":"Eingabe erfolgreich","thankYou":"Danke f\xfcr Ihre Eingabe! Unten finden Sie Ihre eingetragenen Werte.","submission":"Formulareintr\xe4ge","return":"Zur\xfcck zum Formular","key":"Feld","value":"Eintrag"}}}}')},269:function(e,a,r){e.exports=r(485)},274:function(e,a,r){},485:function(e,a,r){"use strict";r.r(a);var t=r(0),n=r.n(t),l=r(8),i=r.n(l),o=(r(274),r(275),r(46)),s=(r(197),r(117)),m=r(489),u=r(490),c=r(196),d=r(47),v=r(221);c.a.use(d.f).init({resources:v,lng:"de",interpolation:{escapeValue:!1}});c.a;var f=r(264),h=r(9),p=(r(279),r(266)),b=(r(284),r(238)),E=(r(286),r(240)),g=(r(288),r(239)),y=(r(289),r(133)),k=(r(294),r(118)),q=r(11),I=r(54),S=(r(488),r(263)),O=r(267),j=function(e){var a=e.name,r=e.showValidateSuccess,n=e.showInitialErrorAfterTouched,l=void 0!==n&&n,i=e.children,o=e.validate,s=Object(O.a)(e,["name","showValidateSuccess","showInitialErrorAfterTouched","children","validate"]),u=Object(m.a)().t;return t.createElement(q.b,{name:a,validate:o},(function(e){var n=e.form,o=n.errors,m=void 0===o?{}:o,c=n.touched,d=void 0===c?{}:c,v=n.initialErrors,f=void 0===v?{}:v,h=Object(q.d)(m,a,void 0),p=Object(q.d)(f,a,void 0),b=Object(q.d)(d,a,!1);Array.isArray(b)&&(b=b.reduce((function(e,a){return e||a}),!1));var E=void 0!==h&&b,g=void 0!==p,y=!h&&b,k=E||g&&(!b||l);return t.createElement(S.a.Item,Object.assign({validateStatus:E||g&&!b?"error":y&&r?"success":void 0,hasFeedback:y,help:k&&t.createElement(t.Fragment,null,E&&t.createElement("li",null,u(h)),g&&(!b||l)&&t.createElement("li",null,u(p)))},s),i)}))},w=r(268),A=function(e){return t.createElement("pre",{style:Object(w.a)({padding:15},e)},t.createElement(q.b,null,(function(e){var a=e.form;return JSON.stringify(a,null,2)})))},T={labelCol:{span:8},wrapperCol:{span:16},style:{display:"grid",gridTemplateColumns:"1fr 1fr"}},V={style:{marginTop:10},wrapperCol:{offset:8,span:16}},z={name:"",email:"",topic:"error",version:"1.10.0",phone:"",description:""},F=I.a().shape({name:I.b().required("form.validation.required"),email:I.b().email("form.validation.emailInvalid").required("form.validation.required"),topic:I.b().required("form.validation.required").oneOf(["general","error","call"],"form.validation.topicInvalid"),version:I.b().when("topic",{is:function(e){return"error"===e},then:I.b().required("form.validation.required").matches(/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/,"form.validation.versionInvalid")}),phone:I.b().when("topic",{is:function(e){return"call"===e},then:I.b().required("form.validation.required").matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,"form.validation.phoneInvalid")}),description:I.b().required("form.validation.required").min(10,"form.validation.descriptionLength")}),Z=function(e){var a=Object(m.a)().t;return t.createElement(q.c,{initialValues:e.initialValues,validationSchema:F,onSubmit:e.onSubmit},(function(e){return t.createElement(p.a,T,t.createElement("div",{className:"component",style:{flex:1}},t.createElement(j,{name:"name",required:!0,label:a("form.labels.name")},t.createElement(k.a,{name:"name",required:!0})),t.createElement(j,{name:"email",required:!0,label:a("form.labels.email")},t.createElement(k.a,{name:"email",required:!0})),t.createElement(j,{name:"topic",required:!0,label:a("form.labels.topic")},t.createElement(y.a,{name:"topic"},t.createElement(y.a.Option,{value:"general"},a("form.values.general")),t.createElement(y.a.Option,{value:"error"},a("form.values.error")),t.createElement(y.a.Option,{value:"call"},a("form.values.call")))),"error"===e.values.topic&&t.createElement(j,{name:"version",required:!0,label:a("form.labels.version")},t.createElement(k.a,{name:"version",required:!0})),"call"===e.values.topic&&t.createElement(j,{name:"phone",required:!0,label:a("form.labels.phone")},t.createElement(k.a,{name:"phone",required:!0})),t.createElement(j,{name:"description",required:!0,label:a("form.labels.description")},t.createElement(k.a.TextArea,{name:"description"})),t.createElement(j,Object.assign({name:"submit"},V),t.createElement(b.a,{size:"large"},t.createElement(g.a,{size:"large"},a("form.labels.submit")),t.createElement(E.a,{size:"large"},a("form.labels.reset"))))),t.createElement("div",{className:"component",style:{flex:1}},t.createElement(A,null)))}))},N=(r(146),r(33)),x=(r(486),r(261)),B=(r(487),r(170)),C=r(163),P=B.a.Title,G=B.a.Paragraph,H=function(e){var a=Object(m.a)().t;if(!e.values||0===Object.keys(e.values).length)return n.a.createElement(h.a,{to:"/form-challenge"});var r=e.values;"error"!==e.values.topic&&delete r.version,"call"!==e.values.topic&&delete r.phone;var t=r,l=Object.keys(r).map((function(e){return{key:a("form.labels.".concat(e)),value:"topic"===e?a("form.values.".concat(t[e])):t[e]}})),i=[{title:a("results.key"),dataIndex:"key",key:"key"},{title:a("results.value"),dataIndex:"value",key:"value"}];return n.a.createElement("div",{className:"component"},n.a.createElement(B.a,null,n.a.createElement(P,null,a("results.title")),n.a.createElement(G,null,a("results.thankYou")),n.a.createElement(P,{level:3},a("results.submission")),n.a.createElement(x.a,{dataSource:l,columns:i,pagination:!1})),n.a.createElement(N.a,{type:"primary",style:{marginTop:24}},n.a.createElement(C.b,{to:"/form-challenge"},a("results.return"))))},L=function(){var e=n.a.useState(z),a=Object(f.a)(e,2),r=a[0],t=a[1],l=Object(h.g)();return n.a.createElement(s.a.Content,null,n.a.createElement(h.d,null,n.a.createElement(h.b,{path:"/results"},n.a.createElement(H,{values:r})),n.a.createElement(h.b,null,n.a.createElement(Z,{initialValues:z,onSubmit:function(e){t(e),l.push("/results")}}))))},R=s.a.Header,D=s.a.Footer;var J=function(){var e=Object(m.a)(),a=e.t,r=e.i18n;return t.createElement(C.a,{basename:"/form-challenge"},t.createElement(s.a,{style:{minHeight:"100vh",overflow:"auto"}},t.createElement(R,null,t.createElement("div",{className:"logo"}),t.createElement(o.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["de"]},t.createElement(o.a.Item,{key:"de",onClick:function(){return r.changeLanguage("de")}},a("german")),t.createElement(o.a.Item,{key:"en",onClick:function(){return r.changeLanguage("en")}},a("english")))),t.createElement(L,null),t.createElement(D,null,t.createElement(u.a,{i18nKey:"footer"},'Written by Ivan "yoruvo" Vidusenko. Find this project on'," ",t.createElement("a",{href:"https://github.com/yoruvo/form-challenge"},"GitHub")))))};i.a.render(n.a.createElement(J,null),document.getElementById("root"))}},[[269,1,2]]]);
//# sourceMappingURL=main.18544299.chunk.js.map