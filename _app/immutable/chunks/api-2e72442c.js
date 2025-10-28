function r(t,i,e,n){const a=n?`?${new URLSearchParams(n).toString()}`:"";return fetch(`/api${i}${a}`,{method:t,headers:{"content-type":"application/json"},body:e&&JSON.stringify(e)})}export{r as a};
