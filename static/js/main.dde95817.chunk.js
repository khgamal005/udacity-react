(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{188:function(e,t,a){},191:function(e,t,a){},192:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(89),c=a.n(r),l=a(195),s=a(15),i=a(16),u=a(18),h=a(17),m=a(196),f=a(197),d=a(30),b="https://reactnd-books-api.udacity.com",k=localStorage.token;k||(k=localStorage.token=Math.random().toString(36).substr(-8));var g={Accept:"application/json",Authorization:k},p=function(e,t){return fetch("".concat(b,"/books/").concat(e.id),{method:"PUT",headers:Object(d.a)(Object(d.a)({},g),{},{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},v=function(e,t){return fetch("".concat(b,"/search"),{method:"POST",headers:Object(d.a)(Object(d.a)({},g),{},{"Content-Type":"application/json"}),body:JSON.stringify({query:e,maxResults:t})}).then(function(e){return e.json()}).then(function(e){return e.books})},A=(a(188),a(93)),y=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).updateShelf=function(t){return e.props.changeShelf(e.props.book,t.target.value)},e}return Object(i.a)(a,[{key:"render",value:function(){var e,t=this.props,a=t.book,n=t.books,r="none",c=Object(A.a)(n);try{for(c.s();!(e=c.n()).done;){var l=e.value;if(l.id===a.id){r=l.shelf;break}}}catch(s){c.e(s)}finally{c.f()}return o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{onChange:this.updateShelf,defaultValue:r},o.a.createElement("option",{value:"none",disabled:!0},"Move to..."),o.a.createElement("option",{value:"currentlyReading"},"Currently Reading"),o.a.createElement("option",{value:"wantToRead"},"Want to Read"),o.a.createElement("option",{value:"read"},"Read"),o.a.createElement("option",{value:"none"},"None")))}}]),a}(n.Component),w=a(90),E=a.n(w),B=function(e){var t=e.book,a=e.books,n=e.changeShelf,r=t.imageLinks&&t.imageLinks.thumbnail?t.imageLinks.thumbnail:E.a,c=t.title?t.title:"No title available";return o.a.createElement("li",null,o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover",style:{backgroundImage:"url(".concat(r,")")}}),o.a.createElement(y,{book:t,books:a,changeShelf:n})),o.a.createElement("div",{className:"book-title"},c),t.authors&&t.authors.map(function(e,t){return o.a.createElement("div",{className:"book-authors",key:t},e)})))},N=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.books,a=e.changeShelf;return o.a.createElement("ol",{className:"books-grid"},t.map(function(e){return o.a.createElement(B,{book:e,books:t,key:e.id,changeShelf:a})}))}}]),a}(n.Component),O=function(e){var t=e.books,a=e.changeShelf;return o.a.createElement("div",{className:"list-books-content"},[{type:"currentlyReading",title:"Currently Reading"},{type:"wantToRead",title:"Want to Read"},{type:"read",title:"Read"}].map(function(e,n){var r=t.filter(function(t){return t.shelf===e.type});return o.a.createElement("div",{className:"bookshelf",key:n},o.a.createElement("h2",{className:"bookshelf-title"},e.title),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement(N,{books:r,changeShelf:a})))}))},j=a(194),M=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={query:"",newBooks:[],searchErr:!1},e.getBooks=function(t){var a=t.target.value;e.setState({query:a}),a?v(a.trim(),20).then(function(t){t.length>0?e.setState({newBooks:t,searchErr:!1}):e.setState({newBooks:[],searchErr:!0})}):e.setState({newBooks:[],searchErr:!1})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.query,a=e.newBooks,n=e.searchErr,r=this.props,c=r.books,l=r.changeShelf;return o.a.createElement("div",{className:"search-books"},o.a.createElement("div",{className:"search-books-bar"},o.a.createElement(j.a,{className:"close-search",to:"/"},"Close"),o.a.createElement("div",{className:"search-books-input-wrapper"},o.a.createElement("input",{type:"text",placeholder:"Search by title or author",value:t,onChange:this.getBooks}))),o.a.createElement("div",{className:"search-books-results"},a.length>0&&o.a.createElement("div",null,o.a.createElement("h3",null,"Search returned ",a.length," books "),o.a.createElement("ol",{className:"books-grid"},a.map(function(e){return o.a.createElement(B,{book:e,books:c,key:e.id,changeShelf:l})}))),n&&o.a.createElement("h3",null,"Search did not return any books. Please try again!")))}}]),a}(n.Component),q=a(91),C=a.n(q),S=function(){return o.a.createElement("div",null,o.a.createElement("h1",{className:"not-found-title"},"These are not the books you are looking for..."),o.a.createElement("figure",{className:"not-found-img"},o.a.createElement("img",{src:C.a,alt:"Page Not Found"}),o.a.createElement("figcaption",null,"Photo by Hope House Press - Leather Diary Studio on Unsplash")),o.a.createElement("div",{className:"home-link"},o.a.createElement(j.a,{to:"/"},"Return home and try again")))},z=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={books:[]},e.changeShelf=function(t,a){p(t,a).then(function(n){t.shelf=a,e.setState(function(e){return{books:e.books.filter(function(e){return e.id!==t.id}).concat(t)}})})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(b,"/books"),{headers:g}).then(function(e){return e.json()}).then(function(e){return e.books}).then(function(t){return e.setState({books:t})})}},{key:"render",value:function(){var e=this,t=this.state.books;return o.a.createElement("div",{className:"app"},o.a.createElement(m.a,null,o.a.createElement(f.a,{path:"/search",render:function(){return o.a.createElement(M,{books:t,changeShelf:e.changeShelf})}}),o.a.createElement(f.a,{exact:!0,path:"/",render:function(){return o.a.createElement("div",{className:"list-books"},o.a.createElement("div",{className:"list-books-title"},o.a.createElement("h1",null,"MyReads")),o.a.createElement(O,{books:t,changeShelf:e.changeShelf}),o.a.createElement("div",{className:"open-search"},o.a.createElement(j.a,{to:"/search"},"Search")))}}),o.a.createElement(f.a,{component:S})))}}]),a}(o.a.Component);a(191);c.a.render(o.a.createElement(l.a,null,o.a.createElement(z,null)),document.getElementById("root"))},90:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAC8CAMAAACHWFYvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAcJQTFRFenp6c3Nz////dHR0eXl5dnZ2eHh4dXV1d3d3fHx8e3t7/v7++Pj4g4ODkJCQfX19cnJy+fn5/f39h4eH5OTk7u7upaWl4uLin5+foqKi9/f3+/v7/Pz89fX1w8PDfn5+nJyc8vLygYGB+vr6b29vxsbGq6urhoaGgICAcHBwoKCgjY2NgoKCmpqaj4+P8PDw7e3tf39/7+/vnp6euLi4vr6+8/PztbW1vb29hISElpaWqampi4uLiYmJ5eXl3t7elJSUjIyM9PT0wsLCkpKSwMDAurq6hYWF5+fnv7+/lZWV3d3dioqKkZGRtLS0wcHB6+vr6OjoxMTEjo6OxcXFbm5ux8fHqqqq0tLS7Ozsubm5z8/P39/frKys1dXV2NjYnZ2dpqam8fHx4eHhrq6ut7e35ubmk5OTl5eXcXFx9vb2oaGh29vb6enpp6enzMzMu7u74ODg4+Pj6urqzs7OsbGxzc3No6OjmZmZ0NDQmJiYysrKsrKy2dnZtra2qKior6+v3Nzc09PTpKSkbW1tiIiIs7Oz0dHRsLCw2tra1NTUra2tycnJvLy8y8vL19fXyMjI1tbWm5ubbGxsa2trampq59wHhwAAC89JREFUeNrsmud7EzsWxkdd9ozjRoobJraD7RQ7vfdCOum9JyQhjTQSeu+wwIW7+/+uNOOEwN1nH8OGmw877yd76s9HR0d6JSuKKVOmTJkyZcqUKVOmTJkyZcqUKVOmTP1VCACsf7BSB7f+/e+3Vg2XW3QCPjJeS/7292PLGoRzDj0UZfAGuACAlVbvYA2XAFfg1YsAuNR7G7aBswAUCNHvLpOHkJEqCpef5WmCUhcxveWYOM6MhyJqJQ6UNkBBrreZfQNAoVsVFXW2s/ezUF139Qs7kTmKOq92V2eVMAX3F3UaBOvNAovfLG973EzEEVxY5AaJvbfpAmSDcviF4xMAtHgIvRoczPlGgG7uyEP7feKXolulcDMMG3sQ6oaXJTBv0G4zEppRtWLNNW6h4gmw7q4XrmGcJgANNqq3QAqA3fUGbrgbVp2bPSx1De8rDb92u6tcTRaMXrhKl6L1Ha7MekezcygmfjC4AfMdlkcwryHYsAvziHiQ69rh2sOitCOgOF64hkJUB8CWfVdWhJP4W/joJA3QH7A8QkhkAD7ZKBzU7sY52aiGuwg/c5WJMPGFzNBGFdwFBDO67e9h6IqWfBTcYOkDYPIcVgMdgH11zcrQUfuac92oCrSzNBkV3YSt55aPPYHPZdOQaDK3IfIajiOF12vjDvslrWAMIfTnE/1BztYESr8XCADWHwhkRCQAqIJ5eldgM/CD0SnZXf87PRgWmxVchuVGT9lWc+ItgcEQBU/hlXgikLmUk5+ff6VcnSeiCRa48lMACqiAk3EdoEP8BHkCjMJpAwC9gDNGOKnCbqeKFZkUF5N5dQvwd4MloMjbqjk1TXN6tV6ZTA/QTwLwwh3XYo8BUKG/AY2mfqsEuKcDYNHIx/DpCcAEABPwQbzFeRmwIl9jeyJDqr9FAvzjZwEUUKc2lfkFwMPUzeyNeIPRBPf9z/QOZS+IgQG4J49i3Ou6gng0WWy5Ae8ykuEdsiMiBMbArwFguuD/4hVJeNOnf6exQ28ilYQ1mctu0aaoyPfx5Qv4RUaDNFRmiiqEjqFnfsiOcVCkrJ6cfW8T9JcAFNaz6Q2Lbqj0qhMRwuKr8B751g334oSBGdHfY0PhMnHaMQzbxDuQx7/f2i1CImrZDAcEsHvwBvpJgMYDHUABw37fnChE9zXt8UiiwjXVdwJA+kp90wUZo3BS/OYXrtynBe15MLtQ9Awa2vFptSIkNLgNPy/W33wDJ8VIsPhTSXiwYgDwziGfXoq3pqDPD5+NnC3FXfLQZKGsBleXYdilvo/qeQnaXL1WeTuxzfihU3UO27nIAfUPlP54WF9/MuK5Mwrls5At67Goo2cLGYt5ql7fpXrnRu4nj49qqREeHMqIGhWf8+anj+dGmByMYgk3Th+An9YMTozbqJilse+fcPaQHI5PT1NyerscjlNYhJpTXVOmTJn6VafKHexCAUjt+AS/SADHEVz4qRBwcqERwLwhYTnfHCAvHcKAcuE8kTG2ku9d8ekXed5BRn2tUfof7fSvmvWaohaq0Jb7VurpLk8whTVfq7iDqf7GlqvVA9c8ukW2Movn48BEnXP3alC4Wltdd3ddIToHAHQHjgIF5Gn1My4NtuaMXXf5IJyxYzEPr/aquaVhOPtKzssKZuFmUnW9c8g5nKcYLifhVNk5ECAPHBYAw7nvn627q5yNt3Kf1ud3wVUx11+FvbWFoZYH8AETc9FLsDsay8+sbBZeON9X6omVbCX1RYb/HUBYfnBZzbYDEh/1LYspeOSKsIbY0lvqdlCKLDvFwkfXwUlAaGQJfkI0NqTdj1MaKXO9J+cGAD84xIz3FpxH0pckG+3YamsgIu/A2HuthYOP8LW4gL8KZFvFVTPSFwO0Eujj5wZQJKIJsnSbSG3FQyLTeLym7GHFQPWlzQwCjmBFXFzQH36GwbB6/FX44vzFJvV/z4LTJkgBXDMAuoKY4vJSqGUOFle2ZhBen5vZ7nBY7sHrgNxzBqQv1pyt4Trw+wBIG5ya64sFrZPODGLduOUP3M7rgvesmLxR9/oyDGNsw78NAGV4lzPihGI0LwBozXxyvvFw+4ZC5TpC1Zj0xSQeodbfBuDIgs+BvjSTKXOgGt55ia3EIZeoRI/Qm55kLZX8vgiARbWJMorQA3+lAGiD19yFJUErB5QWHjrL4ozEe3yZIXoOlVAvREYvWNIXI6gtcyjIg9nwcp+t/fna5/A64a+6VG/p1M7Bwl4NRx7fZnlGwVzSl4/OoQ6obUBaXiMC6rQOMLUWxKz/EnRW+tZe7ak5iOQUr9xeeLbfWAn3Cym6cwj9YTh0HqUYhxLC7OJoQramcL41slEtBS0iuViJp6oq345qMmysxTtrB5wqlhp9zQqFPNev55SgcxkOdV9LDZt8YnINAywNMsJWcQ5twbY/sRD9VypNUGr5+u+auI14k3cshBFLbba6eBGTSHKkwcPPkws7qnP6YqaQrH3vedNs773VDIYvBEDM1BilHAGiXKCwYsrU/48wQPrWMvlhwvHDIfS7tj1p58C1EswT40s/lD2yPu75Vgksq9Ulv6drkgT02qgYgj79MOCBJ3L6cBIm+2Cghv7GCKAcmPcjQBbsOANwKdP2KwByLAVABpews3vB5NQMW+lYRLRwCgDLRWljk1gHICln/A2AgL8sdv+3SVBoa3qg4uorplibi/TlesVa248xk2Z4ekuaYWy/uW5NAVg5rX3Y3XG9lmMD4GX/dMdEiH0DoKy9qm06tbafxri2NQgDpQG47EHsGFbJgLJm2OFQKjTdDPe6ucLdgUZLqgl4dF4NJ5dV1yjG+rT1iU9zwqFadAJALaP+cPEmfBNKi4A0a5V1nbHOt94pmyNf7ZWbpuCj2hyZhs9qC2MFn+Af4qXuyoMUALa+g8MtocL7KzALCQD/fulrd0O3mtnADQBMj+G9gmB0AL5Pa+8aTfvqxjjlkVGY4yjp0tqJgq2N2djSlBmVZjh4OBij3J2bnQIg7YHnSIzEkbuuTxIgHH4S4cTxAA4jAwDdgo8owwQcwztpTRJL6q0yCf85Ad8CMCA3S1mtWu44McORL956fgZAsbhtwgmDeKh1m8p587bMBdTj7CrhEoDzBfXrn8Isv7wPd9MCwBvW2rm9jurnriq5Z7hvxaDC309OzfBaoICcBRDlriVrtbv7cmBWFMgs478XNLYTKGASgHUWBz6USa/81JltTacNWM6B6l+emlr2XQfYuhLuQZauWZFKyrWkYYYrvwcg0dsaDBRPlWpNOoBeB7AyK26UAKggt9VrbCJvDqVjlFiZM9zRXhikc8Jpy+3H6pc3VfGJXIaD0gxb3mvfAdDQCnxUFi2x9CX3zwI0OVMAI62Z90cMszySxgoeVnrhUYRRvPFBApAM7YBVhEcI6deSI8IMU/T5ewDwGi5gwDGJVhoA+p84cElXaz0xmiCzMgqkV0ZjjrSKbGluVP8LzxsJoNBHvq/Z21yuzrzRzbA72XoWAKBP8MOGOLGxpBpN8I7ok2TnipXqSUgfqVvyzbzmqDmNFMCxHW97nJLIktMvAcBTV5P2VpitHLWXSzO868/9PgJt8OMY5w5bl18H8IU9EcLArsBPdcM6uG13EORogxXp9ALUDZt6bA3luccu+W8B3pD05dZzhZZcgm0Ntvb5xgVnP0kVonw4jlits3WiszN/Z37wQHSYpcCu9/FI/zicDVJsbyyVhWgGznpamsdhUyydkYnad12uSi2w1OPSRxoy45o0gtoozXCju8K1yLh7eUVGQB1FCpurhIGA/zi2MmWjoK6Jd6h+F9x+JQqY/aBYlGJuz3PCsMt/25aeZ6D05tFqnRsEEw16m9gMR6yw2J2qqhyLMMNigLIU1Os7wnKbGPVNrB71EN43YldwoZuz9YdVZVZ9/ba+QOY9ZYm5xzfaSdqejemDMU7dQE+2fb+Z4RN/nDLL3BiM9YV6zM8uZ5+s3ZPTTWRTpkyZMmXKlClTpkyZMmXKlClTpkyZMmXKlClTpkyZMmXKlClTpv6ifwswAHlh2BqRmkGzAAAAAElFTkSuQmCC"},91:function(e,t,a){e.exports=a.p+"static/media/stacked-books.51adb8eb.jpg"},94:function(e,t,a){e.exports=a(192)}},[[94,1,2]]]);
//# sourceMappingURL=main.dde95817.chunk.js.map