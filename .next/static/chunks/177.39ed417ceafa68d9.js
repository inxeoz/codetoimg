"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177,928],{4928:function(t,e,r){function n(t){var e,r,n=t.statementIndent,i=t.jsonld,a=t.json||i,o=t.typescript,u=t.wordCharacters||/[\w$\xa1-\uffff]/,s=function(){function t(t){return{type:t,style:"keyword"}}var e=t("keyword a"),r=t("keyword b"),n=t("keyword c"),i=t("keyword d"),a=t("operator"),o={type:"atom",style:"atom"};return{if:t("if"),while:e,with:e,else:r,do:r,try:r,finally:r,return:i,break:i,continue:i,new:t("new"),delete:n,void:n,throw:n,debugger:t("debugger"),var:t("var"),const:t("var"),let:t("var"),function:t("function"),catch:t("catch"),for:t("for"),switch:t("switch"),case:t("case"),default:t("default"),in:a,typeof:a,instanceof:a,true:o,false:o,null:o,undefined:o,NaN:o,Infinity:o,this:t("this"),class:t("class"),super:t("atom"),yield:n,export:t("export"),import:t("import"),extends:n,await:n}}(),c=/[+\-*&%=<>!?|~^@]/,f=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;function l(t,n,i){return e=t,r=i,n}function d(t,e){var r=t.next();if('"'==r||"'"==r)return e.tokenize=function(t,e){var n,a=!1;if(i&&"@"==t.peek()&&t.match(f))return e.tokenize=d,l("jsonld-keyword","meta");for(;null!=(n=t.next())&&(n!=r||a);)a=!a&&"\\"==n;return a||(e.tokenize=d),l("string","string")},e.tokenize(t,e);if("."==r&&t.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))return l("number","number");if("."==r&&t.match(".."))return l("spread","meta");if(/[\[\]{}\(\),;\:\.]/.test(r))return l(r);if("="==r&&t.eat(">"))return l("=>","operator");if("0"==r&&t.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))return l("number","number");if(/\d/.test(r))return t.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/),l("number","number");else if("/"==r)return t.eat("*")?(e.tokenize=p,p(t,e)):t.eat("/")?(t.skipToEnd(),l("comment","comment")):e.tokenize==d&&/^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(e.lastType)||"quasi"==e.lastType&&/\{\s*$/.test(t.string.slice(0,t.pos-1))?(!function(t){for(var e,r=!1,n=!1;null!=(e=t.next());){if(!r){if("/"==e&&!n)return;"["==e?n=!0:n&&"]"==e&&(n=!1)}r=!r&&"\\"==e}}(t),t.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),l("regexp","string.special")):(t.eat("="),l("operator","operator",t.current()));else if("`"==r)return e.tokenize=m,m(t,e);else if("#"==r&&"!"==t.peek())return t.skipToEnd(),l("meta","meta");else if("#"==r&&t.eatWhile(u))return l("variable","property");else if("<"==r&&t.match("!--")||"-"==r&&t.match("->")&&!/\S/.test(t.string.slice(0,t.start)))return t.skipToEnd(),l("comment","comment");else if(c.test(r))return((">"!=r||!e.lexical||">"!=e.lexical.type)&&(t.eat("=")?("!"==r||"="==r)&&t.eat("="):/[<>*+\-|&?]/.test(r)&&(t.eat(r),">"==r&&t.eat(r))),"?"==r&&t.eat("."))?l("."):l("operator","operator",t.current());else if(u.test(r)){t.eatWhile(u);var n=t.current();if("."!=e.lastType){if(s.propertyIsEnumerable(n)){var a=s[n];return l(a.type,a.style,n)}if("async"==n&&t.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/,!1))return l("async","keyword",n)}return l("variable","variable",n)}}function p(t,e){for(var r,n=!1;r=t.next();){if("/"==r&&n){e.tokenize=d;break}n="*"==r}return l("comment","comment")}function m(t,e){for(var r,n=!1;null!=(r=t.next());){if(!n&&("`"==r||"$"==r&&t.eat("{"))){e.tokenize=d;break}n=!n&&"\\"==r}return l("quasi","string.special",t.current())}function v(t,e){e.fatArrowAt&&(e.fatArrowAt=null);var r=t.string.indexOf("=>",t.start);if(!(r<0)){if(o){var n=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(t.string.slice(t.start,r));n&&(r=n.index)}for(var i=0,a=!1,s=r-1;s>=0;--s){var c=t.string.charAt(s),f="([{}])".indexOf(c);if(f>=0&&f<3){if(!i){++s;break}if(0==--i){"("==c&&(a=!0);break}}else if(f>=3&&f<6)++i;else if(u.test(c))a=!0;else if(/["'\/`]/.test(c))for(;;--s){if(0==s)return;if(t.string.charAt(s-1)==c&&"\\"!=t.string.charAt(s-2)){s--;break}}else if(a&&!i){++s;break}}a&&!i&&(e.fatArrowAt=s)}}var k={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,this:!0,import:!0,"jsonld-keyword":!0};function h(t,e,r,n,i,a){this.indented=t,this.column=e,this.type=r,this.prev=i,this.info=a,null!=n&&(this.align=n)}var y={state:null,marked:null,cc:null};function b(){for(var t=arguments.length-1;t>=0;t--)y.cc.push(arguments[t])}function w(){return b.apply(null,arguments),!0}function g(t,e){for(var r=e;r;r=r.next)if(r.name==t)return!0;return!1}function x(e){var r=y.state;if(y.marked="def",r.context){if("var"==r.lexical.info&&r.context&&r.context.block){var n=function t(e,r){if(!r)return null;if(r.block){var n=t(e,r.prev);return n?n==r.prev?r:new S(n,r.vars,!0):null}return g(e,r.vars)?r:new S(r.prev,new A(e,r.vars),!1)}(e,r.context);if(null!=n){r.context=n;return}}else if(!g(e,r.localVars)){r.localVars=new A(e,r.localVars);return}}t.globalVars&&!g(e,r.globalVars)&&(r.globalVars=new A(e,r.globalVars))}function j(t){return"public"==t||"private"==t||"protected"==t||"abstract"==t||"readonly"==t}function S(t,e,r){this.prev=t,this.vars=e,this.block=r}function A(t,e){this.name=t,this.next=e}var L=new A("this",new A("arguments",null));function T(){y.state.context=new S(y.state.context,y.state.localVars,!1),y.state.localVars=L}function N(){y.state.context=new S(y.state.context,y.state.localVars,!0),y.state.localVars=null}function V(){y.state.localVars=y.state.context.vars,y.state.context=y.state.context.prev}function O(t,e){var r=function(){var r=y.state,n=r.indented;if("stat"==r.lexical.type)n=r.lexical.indented;else for(var i=r.lexical;i&&")"==i.type&&i.align;i=i.prev)n=i.indented;r.lexical=new h(n,y.stream.column(),t,null,r.lexical,e)};return r.lex=!0,r}function E(){var t=y.state;t.lexical.prev&&(")"==t.lexical.type&&(t.indented=t.lexical.indented),t.lexical=t.lexical.prev)}function I(t){return function e(r){return r==t?w():";"==t||"}"==r||")"==r||"]"==r?b():w(e)}}function z(t,e){if("var"==t)return w(O("vardef",e),th,I(";"),E);if("keyword a"==t)return w(O("form"),D,z,E);if("keyword b"==t)return w(O("form"),z,E);if("keyword d"==t)return y.stream.match(/^\s*$/,!1)?w():w(O("stat"),q,I(";"),E);if("debugger"==t)return w(I(";"));if("{"==t)return w(O("}"),N,te,E,V);if(";"==t)return w();if("if"==t)return"else"==y.state.lexical.info&&y.state.cc[y.state.cc.length-1]==E&&y.state.cc.pop()(),w(O("form"),D,z,E,tj);if("function"==t)return w(tT);if("for"==t)return w(O("form"),N,tS,z,V,E);if("class"==t||o&&"interface"==e)return y.marked="keyword",w(O("form","class"==t?t:e),tI,E);if("variable"==t)return o&&"declare"==e?(y.marked="keyword",w(z)):o&&("module"==e||"enum"==e||"type"==e)&&y.stream.match(/^\s*\w/,!1)?(y.marked="keyword","enum"==e)?w(tZ):"type"==e?w(tV,I("operator"),to,I(";")):w(O("form"),ty,I("{"),O("}"),te,E,E):o&&"namespace"==e?(y.marked="keyword",w(O("form"),$,z,E)):o&&"abstract"==e?(y.marked="keyword",w(z)):w(O("stat"),K);return"switch"==t?w(O("form"),D,I("{"),O("}","switch"),N,te,E,E,V):"case"==t?w($,I(":")):"default"==t?w(I(":")):"catch"==t?w(O("form"),T,C,z,E,V):"export"==t?w(O("stat"),t_,E):"import"==t?w(O("stat"),tF,E):"async"==t?w(z):"@"==e?w($,z):b(O("stat"),$,I(";"),E)}function C(t){if("("==t)return w(tO,I(")"))}function $(t,e){return F(t,e,!1)}function _(t,e){return F(t,e,!0)}function D(t){return"("!=t?b():w(O(")"),q,I(")"),E)}function F(t,e,r){if(y.state.fatArrowAt==y.stream.start){var n=r?G:Z;if("("==t)return w(T,O(")"),Y(tO,")"),E,I("=>"),n,V);if("variable"==t)return b(T,ty,I("=>"),n,V)}var i=r?P:U;return k.hasOwnProperty(t)?w(i):"function"==t?w(tT,i):"class"==t||o&&"interface"==e?(y.marked="keyword",w(O("form"),tE,E)):"keyword c"==t||"async"==t?w(r?_:$):"("==t?w(O(")"),q,I(")"),E,i):"operator"==t||"spread"==t?w(r?_:$):"["==t?w(O("]"),tB,E,i):"{"==t?tt(Q,"}",null,i):"quasi"==t?b(W,i):"new"==t?w(function(t){return"."==t?w(r?J:H):"variable"==t&&o?w(tm,r?P:U):b(r?_:$)}):w()}function q(t){return t.match(/[;\}\)\],]/)?b():b($)}function U(t,e){return","==t?w(q):P(t,e,!1)}function P(t,e,r){var n=!1==r?U:P,i=!1==r?$:_;if("=>"==t)return w(T,r?G:Z,V);if("operator"==t)return/\+\+|--/.test(e)||o&&"!"==e?w(n):o&&"<"==e&&y.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/,!1)?w(O(">"),Y(to,">"),E,n):"?"==e?w($,I(":"),i):w(i);if("quasi"==t)return b(W,n);if(";"!=t){if("("==t)return tt(_,")","call",n);if("."==t)return w(M,n);if("["==t)return w(O("]"),q,I("]"),E,n);if(o&&"as"==e)return y.marked="keyword",w(to,n);if("regexp"==t)return y.state.lastType=y.marked="operator",y.stream.backUp(y.stream.pos-y.stream.start-1),w(i)}}function W(t,e){return"quasi"!=t?b():"${"!=e.slice(e.length-2)?w(W):w(q,B)}function B(t){if("}"==t)return y.marked="string.special",y.state.tokenize=m,w(W)}function Z(t){return v(y.stream,y.state),b("{"==t?z:$)}function G(t){return v(y.stream,y.state),b("{"==t?z:_)}function H(t,e){if("target"==e)return y.marked="keyword",w(U)}function J(t,e){if("target"==e)return y.marked="keyword",w(P)}function K(t){return":"==t?w(E,z):b(U,I(";"),E)}function M(t){if("variable"==t)return y.marked="property",w()}function Q(t,e){if("async"==t)return y.marked="property",w(Q);if("variable"==t||"keyword"==y.style){var r;return(y.marked="property","get"==e||"set"==e)?w(R):(o&&y.state.fatArrowAt==y.stream.start&&(r=y.stream.match(/^\s*:\s*/,!1))&&(y.state.fatArrowAt=y.stream.pos+r[0].length),w(X))}if("number"==t||"string"==t)return y.marked=i?"property":y.style+" property",w(X);if("jsonld-keyword"==t)return w(X);if(o&&j(e))return y.marked="keyword",w(Q);if("["==t)return w($,tr,I("]"),X);if("spread"==t)return w(_,X);else if("*"==e)return y.marked="keyword",w(Q);else if(":"==t)return b(X)}function R(t){return"variable"!=t?b(X):(y.marked="property",w(tT))}function X(t){return":"==t?w(_):"("==t?b(tT):void 0}function Y(t,e,r){function n(i,a){if(r?r.indexOf(i)>-1:","==i){var o=y.state.lexical;return"call"==o.info&&(o.pos=(o.pos||0)+1),w(function(r,n){return r==e||n==e?b():b(t)},n)}return i==e||a==e?w():r&&r.indexOf(";")>-1?b(t):w(I(e))}return function(r,i){return r==e||i==e?w():b(t,n)}}function tt(t,e,r){for(var n=3;n<arguments.length;n++)y.cc.push(arguments[n]);return w(O(e,r),Y(t,e),E)}function te(t){return"}"==t?w():b(z,te)}function tr(t,e){if(o){if(":"==t)return w(to);if("?"==e)return w(tr)}}function tn(t,e){if(o&&(":"==t||"in"==e))return w(to)}function ti(t){if(o&&":"==t)return y.stream.match(/^\s*\w+\s+is\b/,!1)?w($,ta,to):w(to)}function ta(t,e){if("is"==e)return y.marked="keyword",w()}function to(t,e){return"keyof"==e||"typeof"==e||"infer"==e||"readonly"==e?(y.marked="keyword",w("typeof"==e?_:to)):"variable"==t||"void"==e?(y.marked="type",w(tp)):"|"==e||"&"==e?w(to):"string"==t||"number"==t||"atom"==t?w(tp):"["==t?w(O("]"),Y(to,"]",","),E,tp):"{"==t?w(O("}"),ts,E,tp):"("==t?w(Y(td,")"),tu,tp):"<"==t?w(Y(to,">"),to):"quasi"==t?b(tf,tp):void 0}function tu(t){if("=>"==t)return w(to)}function ts(t){return t.match(/[\}\)\]]/)?w():","==t||";"==t?w(ts):b(tc,ts)}function tc(t,e){return"variable"==t||"keyword"==y.style?(y.marked="property",w(tc)):"?"==e||"number"==t||"string"==t?w(tc):":"==t?w(to):"["==t?w(I("variable"),tn,I("]"),tc):"("==t?b(tN,tc):t.match(/[;\}\)\],]/)?void 0:w()}function tf(t,e){return"quasi"!=t?b():"${"!=e.slice(e.length-2)?w(tf):w(to,tl)}function tl(t){if("}"==t)return y.marked="string.special",y.state.tokenize=m,w(tf)}function td(t,e){return"variable"==t&&y.stream.match(/^\s*[?:]/,!1)||"?"==e?w(td):":"==t?w(to):"spread"==t?w(td):b(to)}function tp(t,e){return"<"==e?w(O(">"),Y(to,">"),E,tp):"|"==e||"."==t||"&"==e?w(to):"["==t?w(to,I("]"),tp):"extends"==e||"implements"==e?(y.marked="keyword",w(to)):"?"==e?w(to,I(":"),to):void 0}function tm(t,e){if("<"==e)return w(O(">"),Y(to,">"),E,tp)}function tv(){return b(to,tk)}function tk(t,e){if("="==e)return w(to)}function th(t,e){return"enum"==e?(y.marked="keyword",w(tZ)):b(ty,tr,tg,tx)}function ty(t,e){return o&&j(e)?(y.marked="keyword",w(ty)):"variable"==t?(x(e),w()):"spread"==t?w(ty):"["==t?tt(tw,"]"):"{"==t?tt(tb,"}"):void 0}function tb(t,e){return"variable"!=t||y.stream.match(/^\s*:/,!1)?("variable"==t&&(y.marked="property"),"spread"==t)?w(ty):"}"==t?b():"["==t?w($,I("]"),I(":"),tb):w(I(":"),ty,tg):(x(e),w(tg))}function tw(){return b(ty,tg)}function tg(t,e){if("="==e)return w(_)}function tx(t){if(","==t)return w(th)}function tj(t,e){if("keyword b"==t&&"else"==e)return w(O("form","else"),z,E)}function tS(t,e){return"await"==e?w(tS):"("==t?w(O(")"),tA,E):void 0}function tA(t){return"var"==t?w(th,tL):"variable"==t?w(tL):b(tL)}function tL(t,e){return")"==t?w():";"==t?w(tL):"in"==e||"of"==e?(y.marked="keyword",w($,tL)):b($,tL)}function tT(t,e){return"*"==e?(y.marked="keyword",w(tT)):"variable"==t?(x(e),w(tT)):"("==t?w(T,O(")"),Y(tO,")"),E,ti,z,V):o&&"<"==e?w(O(">"),Y(tv,">"),E,tT):void 0}function tN(t,e){return"*"==e?(y.marked="keyword",w(tN)):"variable"==t?(x(e),w(tN)):"("==t?w(T,O(")"),Y(tO,")"),E,ti,V):o&&"<"==e?w(O(">"),Y(tv,">"),E,tN):void 0}function tV(t,e){return"keyword"==t||"variable"==t?(y.marked="type",w(tV)):"<"==e?w(O(">"),Y(tv,">"),E):void 0}function tO(t,e){return("@"==e&&w($,tO),"spread"==t)?w(tO):o&&j(e)?(y.marked="keyword",w(tO)):o&&"this"==t?w(tr,tg):b(ty,tr,tg)}function tE(t,e){return"variable"==t?tI(t,e):tz(t,e)}function tI(t,e){if("variable"==t)return x(e),w(tz)}function tz(t,e){return"<"==e?w(O(">"),Y(tv,">"),E,tz):"extends"==e||"implements"==e||o&&","==t?("implements"==e&&(y.marked="keyword"),w(o?to:$,tz)):"{"==t?w(O("}"),tC,E):void 0}function tC(t,e){return"async"==t||"variable"==t&&("static"==e||"get"==e||"set"==e||o&&j(e))&&y.stream.match(/^\s+#?[\w$\xa1-\uffff]/,!1)?(y.marked="keyword",w(tC)):"variable"==t||"keyword"==y.style?(y.marked="property",w(t$,tC)):"number"==t||"string"==t?w(t$,tC):"["==t?w($,tr,I("]"),t$,tC):"*"==e?(y.marked="keyword",w(tC)):o&&"("==t?b(tN,tC):";"==t||","==t?w(tC):"}"==t?w():"@"==e?w($,tC):void 0}function t$(t,e){if("!"==e||"?"==e)return w(t$);if(":"==t)return w(to,tg);if("="==e)return w(_);var r=y.state.lexical.prev;return b(r&&"interface"==r.info?tN:tT)}function t_(t,e){return"*"==e?(y.marked="keyword",w(tW,I(";"))):"default"==e?(y.marked="keyword",w($,I(";"))):"{"==t?w(Y(tD,"}"),tW,I(";")):b(z)}function tD(t,e){return"as"==e?(y.marked="keyword",w(I("variable"))):"variable"==t?b(_,tD):void 0}function tF(t){return"string"==t?w():"("==t?b($):"."==t?b(U):b(tq,tU,tW)}function tq(t,e){return"{"==t?tt(tq,"}"):("variable"==t&&x(e),"*"==e&&(y.marked="keyword"),w(tP))}function tU(t){if(","==t)return w(tq,tU)}function tP(t,e){if("as"==e)return y.marked="keyword",w(tq)}function tW(t,e){if("from"==e)return y.marked="keyword",w($)}function tB(t){return"]"==t?w():b(Y(_,"]"))}function tZ(){return b(O("form"),ty,I("{"),O("}"),Y(tG,"}"),E,E)}function tG(){return b(ty,tg)}return T.lex=N.lex=!0,V.lex=!0,E.lex=!0,{name:t.name,startState:function(e){var r={tokenize:d,lastType:"sof",cc:[],lexical:new h(-e,0,"block",!1),localVars:t.localVars,context:t.localVars&&new S(null,null,!1),indented:0};return t.globalVars&&"object"==typeof t.globalVars&&(r.globalVars=t.globalVars),r},token:function(t,n){if(t.sol()&&(n.lexical.hasOwnProperty("align")||(n.lexical.align=!1),n.indented=t.indentation(),v(t,n)),n.tokenize!=p&&t.eatSpace())return null;var i=n.tokenize(t,n);return"comment"==e?i:(n.lastType="operator"==e&&("++"==r||"--"==r)?"incdec":e,function(t,e,r,n,i){var o=t.cc;for(y.state=t,y.stream=i,y.marked=null,y.cc=o,y.style=e,t.lexical.hasOwnProperty("align")||(t.lexical.align=!0);;)if((o.length?o.pop():a?$:z)(r,n)){for(;o.length&&o[o.length-1].lex;)o.pop()();if(y.marked)return y.marked;if("variable"==r&&function(t,e){for(var r=t.localVars;r;r=r.next)if(r.name==e)return!0;for(var n=t.context;n;n=n.prev)for(var r=n.vars;r;r=r.next)if(r.name==e)return!0}(t,n))return"variableName.local";return e}}(n,i,e,r,t))},indent:function(e,r,i){if(e.tokenize==p||e.tokenize==m)return null;if(e.tokenize!=d)return 0;var a,o=r&&r.charAt(0),u=e.lexical;if(!/^\s*else\b/.test(r))for(var s=e.cc.length-1;s>=0;--s){var f=e.cc[s];if(f==E)u=u.prev;else if(f!=tj&&f!=V)break}for(;("stat"==u.type||"form"==u.type)&&("}"==o||(a=e.cc[e.cc.length-1])&&(a==U||a==P)&&!/^[,\.=+\-*:?[\(]/.test(r));)u=u.prev;n&&")"==u.type&&"stat"==u.prev.type&&(u=u.prev);var l=u.type,v=o==l;return"vardef"==l?u.indented+("operator"==e.lastType||","==e.lastType?u.info.length+1:0):"form"==l&&"{"==o?u.indented:"form"==l?u.indented+i.unit:"stat"==l?u.indented+("operator"==e.lastType||","==e.lastType||c.test(r.charAt(0))||/[,.]/.test(r.charAt(0))?n||i.unit:0):"switch"!=u.info||v||!1==t.doubleIndentSwitch?u.align?u.column+(v?0:1):u.indented+(v?0:i.unit):u.indented+(/^(?:case|default)\b/.test(r)?i.unit:2*i.unit)},languageData:{indentOnInput:/^\s*(?:case .*?:|default:|\{|\})$/,commentTokens:a?void 0:{line:"//",block:{open:"/*",close:"*/"}},closeBrackets:{brackets:["(","[","{","'",'"',"`"]},wordChars:"$"}}}r.r(e),r.d(e,{javascript:function(){return i},json:function(){return a},jsonld:function(){return o},typescript:function(){return u}});let i=n({name:"javascript"}),a=n({name:"json",json:!0}),o=n({name:"json",jsonld:!0}),u=n({name:"typescript",typescript:!0})},1177:function(t,e,r){r.r(e),r.d(e,{pug:function(){return c}});var n=r(4928),i={"{":"}","(":")","[":"]"};class a{constructor(t){this.indentUnit=t,this.javaScriptLine=!1,this.javaScriptLineExcludesColon=!1,this.javaScriptArguments=!1,this.javaScriptArgumentsDepth=0,this.isInterpolating=!1,this.interpolationNesting=0,this.jsState=n.javascript.startState(t),this.restOfLine="",this.isIncludeFiltered=!1,this.isEach=!1,this.lastTag="",this.isAttrs=!1,this.attrsNest=[],this.inAttributeName=!0,this.attributeIsType=!1,this.attrValue="",this.indentOf=1/0,this.indentToken=""}copy(){var t=new a(this.indentUnit);return t.javaScriptLine=this.javaScriptLine,t.javaScriptLineExcludesColon=this.javaScriptLineExcludesColon,t.javaScriptArguments=this.javaScriptArguments,t.javaScriptArgumentsDepth=this.javaScriptArgumentsDepth,t.isInterpolating=this.isInterpolating,t.interpolationNesting=this.interpolationNesting,t.jsState=(n.javascript.copyState||function(t){if("object"!=typeof t)return t;let e={};for(let r in t){let n=t[r];e[r]=n instanceof Array?n.slice():n}return e})(this.jsState),t.restOfLine=this.restOfLine,t.isIncludeFiltered=this.isIncludeFiltered,t.isEach=this.isEach,t.lastTag=this.lastTag,t.isAttrs=this.isAttrs,t.attrsNest=this.attrsNest.slice(),t.inAttributeName=this.inAttributeName,t.attributeIsType=this.attributeIsType,t.attrValue=this.attrValue,t.indentOf=this.indentOf,t.indentToken=this.indentToken,t}}function o(t,e){if(t.match("#{"))return e.isInterpolating=!0,e.interpolationNesting=0,"punctuation"}function u(t,e){if(t.match(/^:([\w\-]+)/))return s(t,e),"atom"}function s(t,e){e.indentOf=t.indentation(),e.indentToken="string"}let c={startState:function(t){return new a(t)},copyState:function(t){return t.copy()},token:function(t,e){var r=function(t,e){if(t.sol()&&(e.restOfLine=""),e.restOfLine){t.skipToEnd();var r=e.restOfLine;return e.restOfLine="",r}}(t,e)||function(t,e){if(e.isInterpolating){if("}"===t.peek()){if(e.interpolationNesting--,e.interpolationNesting<0)return t.next(),e.isInterpolating=!1,"punctuation"}else"{"===t.peek()&&e.interpolationNesting++;return n.javascript.token(t,e.jsState)||!0}}(t,e)||function(t,e){if(e.isIncludeFiltered){var r=u(t,e);return e.isIncludeFiltered=!1,e.restOfLine="string",r}}(t,e)||function(t,e){if(e.isEach){if(t.match(/^ in\b/))return e.javaScriptLine=!0,e.isEach=!1,"keyword";if(t.sol()||t.eol())e.isEach=!1;else if(t.next()){for(;!t.match(/^ in\b/,!1)&&t.next(););return"variable"}}}(t,e)||function t(e,r){if(r.isAttrs){if(i[e.peek()]&&r.attrsNest.push(i[e.peek()]),r.attrsNest[r.attrsNest.length-1]===e.peek())r.attrsNest.pop();else if(e.eat(")"))return r.isAttrs=!1,"punctuation";if(r.inAttributeName&&e.match(/^[^=,\)!]+/))return("="===e.peek()||"!"===e.peek())&&(r.inAttributeName=!1,r.jsState=n.javascript.startState(2),"script"===r.lastTag&&"type"===e.current().trim().toLowerCase()?r.attributeIsType=!0:r.attributeIsType=!1),"attribute";var a=n.javascript.token(e,r.jsState);if(0===r.attrsNest.length&&("string"===a||"variable"===a||"keyword"===a))try{return Function("","var x "+r.attrValue.replace(/,\s*$/,"").replace(/^!/,"")),r.inAttributeName=!0,r.attrValue="",e.backUp(e.current().length),t(e,r)}catch(t){}return r.attrValue+=e.current(),a||!0}}(t,e)||function(t,e){if(t.sol()&&(e.javaScriptLine=!1,e.javaScriptLineExcludesColon=!1),e.javaScriptLine){if(e.javaScriptLineExcludesColon&&":"===t.peek()){e.javaScriptLine=!1,e.javaScriptLineExcludesColon=!1;return}var r=n.javascript.token(t,e.jsState);return t.eol()&&(e.javaScriptLine=!1),r||!0}}(t,e)||function(t,e){if(e.javaScriptArguments){if(0===e.javaScriptArgumentsDepth&&"("!==t.peek()||("("===t.peek()?e.javaScriptArgumentsDepth++:")"===t.peek()&&e.javaScriptArgumentsDepth--,0===e.javaScriptArgumentsDepth)){e.javaScriptArguments=!1;return}return n.javascript.token(t,e.jsState)||!0}}(t,e)||function(t,e){if(e.mixinCallAfter)return e.mixinCallAfter=!1,t.match(/^\( *[-\w]+ *=/,!1)||(e.javaScriptArguments=!0,e.javaScriptArgumentsDepth=0),!0}(t,e)||function(t){if(t.match(/^yield\b/))return"keyword"}(t)||function(t){if(t.match(/^(?:doctype) *([^\n]+)?/))return"meta"}(t)||o(t,e)||function(t,e){if(t.match(/^case\b/))return e.javaScriptLine=!0,"keyword"}(t,e)||function(t,e){if(t.match(/^when\b/))return e.javaScriptLine=!0,e.javaScriptLineExcludesColon=!0,"keyword"}(t,e)||function(t){if(t.match(/^default\b/))return"keyword"}(t)||function(t,e){if(t.match(/^extends?\b/))return e.restOfLine="string","keyword"}(t,e)||function(t,e){if(t.match(/^append\b/))return e.restOfLine="variable","keyword"}(t,e)||function(t,e){if(t.match(/^prepend\b/))return e.restOfLine="variable","keyword"}(t,e)||function(t,e){if(t.match(/^block\b *(?:(prepend|append)\b)?/))return e.restOfLine="variable","keyword"}(t,e)||function(t,e){if(t.match(/^include\b/))return e.restOfLine="string","keyword"}(t,e)||function(t,e){if(t.match(/^include:([a-zA-Z0-9\-]+)/,!1)&&t.match("include"))return e.isIncludeFiltered=!0,"keyword"}(t,e)||function(t,e){if(t.match(/^mixin\b/))return e.javaScriptLine=!0,"keyword"}(t,e)||(t.match(/^\+([-\w]+)/)?(t.match(/^\( *[-\w]+ *=/,!1)||(e.javaScriptArguments=!0,e.javaScriptArgumentsDepth=0),"variable"):t.match("+#{",!1)?(t.next(),e.mixinCallAfter=!0,o(t,e)):void 0)||function(t,e){if(t.match(/^(if|unless|else if|else)\b/))return e.javaScriptLine=!0,"keyword"}(t,e)||function(t,e){if(t.match(/^(- *)?(each|for)\b/))return e.isEach=!0,"keyword"}(t,e)||function(t,e){if(t.match(/^while\b/))return e.javaScriptLine=!0,"keyword"}(t,e)||function(t,e){var r;if(r=t.match(/^(\w(?:[-:\w]*\w)?)\/?/))return e.lastTag=r[1].toLowerCase(),"tag"}(t,e)||u(t,e)||function(t,e){if(t.match(/^(!?=|-)/))return e.javaScriptLine=!0,"punctuation"}(t,e)||function(t){if(t.match(/^#([\w-]+)/))return"builtin"}(t)||function(t){if(t.match(/^\.([\w-]+)/))return"className"}(t)||function(t,e){if("("==t.peek())return t.next(),e.isAttrs=!0,e.attrsNest=[],e.inAttributeName=!0,e.attrValue="",e.attributeIsType=!1,"punctuation"}(t,e)||function(t,e){if(t.match(/^&attributes\b/))return e.javaScriptArguments=!0,e.javaScriptArgumentsDepth=0,"keyword"}(t,e)||function(t){if(t.sol()&&t.eatSpace())return"indent"}(t)||(t.match(/^(?:\| ?| )([^\n]+)/)?"string":t.match(/^(<[^\n]*)/,!1)?(s(t,e),t.skipToEnd(),e.indentToken):void 0)||function(t,e){if(t.match(/^ *\/\/(-)?([^\n]*)/))return e.indentOf=t.indentation(),e.indentToken="comment","comment"}(t,e)||function(t){if(t.match(/^: */))return"colon"}(t)||function(t,e){if(t.eat("."))return s(t,e),"dot"}(t,e)||(t.next(),null);return!0===r?null:r}}}}]);