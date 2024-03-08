"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[63],{544:function(e,t,a){a.r(t),a.d(t,{Head:function(){return b},default:function(){return u}});var n=a(1151),l=a(7294);function i(e){const t=Object.assign({p:"p",strong:"strong",span:"span",blockquote:"blockquote",a:"a",h2:"h2"},(0,n.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.p,null,"컴퓨터비전개론 강의에서 배운 점들을 실습 내역을 정리하였습니다. 실습들을 진행하며 ",l.createElement(t.strong,null,"단순히 ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">OpenCV</code>'}})," 같은 라이브러리를 사용하는 것이 아닌, 기본적인 비전 처리를 ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Python</code>'}}),"을 통해 직접 구현"),"하였습니다. 구현한 내용은 ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Gaussian Filter</code>'}}),", ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Canny Edge Detection</code>'}}),", ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">RANSAC</code>'}}),", ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Homography</code>'}})," ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Epipolar Geometry</code>'}}),", ",l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">CNN</code>'}})," 등이 있습니다. 각 폴더 별로 코드와 함께 간략한 원리를 작성하였습니다."),"\n",l.createElement(t.blockquote,null,"\n",l.createElement(t.p,null,"부산대학교 2023년 컴퓨터비전개론을 정리한 ",l.createElement(t.a,{href:"https://github.com/jagaldol/computer-vision"},"저장소"),"입니다."),"\n"),"\n",l.createElement("div",{align:"center"},l.createElement(t.h2,null,"Contents"),l.createElement(t.p,null,l.createElement(t.a,{href:"https://github.com/jagaldol/computer-vision-4-1/tree/main/1.%20image%20processing%20with%20PIL"},"Image Processing with PIL")),l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 668px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/41550c920b20ec6c2517d9861b67877a/74866/hybrid-image.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 75.99999999999999%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD80lEQVR42lWS60+TZxiHu087mOmyjOE8sOim0x00S1y2OQPICqJA7YGWQ8+ldgilJ5DWSjlDYUAFaguUl9JShBZEpoiOzWiI07lsc8mmibo/5torWTL29c6T63fdv/uRrK3O88Od71lcmSeWHGMiFSOcmSE4cYn2SJS+xATdk+P4LoYIChMkFtIklq9i9zVz+OMDfH5oHztz9vDa1iy2vpmN5N4fD3jw9BmP/n7CL48f8vOTX7n3/Bm3/nrK1UePufL7n0z/9Iix9ceM3X9O4rdnCA+fUO1tI2vHXg7s38uuzcC5hSR37yyx/nCNtbvXWb2ZZm3tGjdurbC8coXk5RkS6Tmi80sI391EuH2f0ZvrWNp7+eDQEQ4f/pBde/aLwLdE4HYkUSHK3dtx7qwvkU5HGI8MkkolWLl2lYV0kpHhiwiCQDw1hzCTYiqTQVi+Tv/sEsWVRo5Ki8jevZ8tIvD1F8COYB+3V+PMzoUZDvUQHQmxvJQRgRmW0tNMXhoiNjZKIhEnmZxhNBKhZzBEy8AIBreXfJmSrF3vsWXbv8Cm1k5+vJVkShiiK+DjckJgMTPL8uIsi6kx4iO9JMdDomWM8UmB4dEwvkArTl8runoXReVV/wfWNfpJzYzS3+Uj1OElEQkR7uskNtyLEAoQ8tuZCnUQGRlkWrx8KjGF/4IfS60bc50bk91Fds6+jZU3OtSYHbjcTbhsJhptevILSvnsyHEGAk30izCvrYqBCw6aG2pRnC6n0ePB47JjPGPHbD1LrbOZHe9uOopC34Bcbcam0xL0ulGrTaiqTXR6m7AZLZSWKHHarBiqdOR8lMfRYwXYLVrUVXr0Oh3Wsw7eyXn/P2C53s7xUhPGcg2DLY0IQx1MRwYI+M4jLVTzyacFqFRaml1urCYxuLqcM7oKyuQalAoVeoOJ7TmbDDUGO7klho2HoXY30cF2YuEQgdYgZTIz0qIXFj6CwW/p9ns431BDtUYtzmXk5ReikMnI2XtwA/ZG1k4katGwUG6k1Wkg3HuO+ESYocEhvrF50JyuoUJVj87o5EJ7kBbfOfznnChFu+O5UnLziqhQKng7ezeSl17h5Ve3iR1q7dQ57Ez0uOkPuOjt6sDT4EZWosWksFJdqKGwSInd5aOnq4f6unq++uJLpLnHKC4uo0KtxmI1UVFjI++kDInW1kzqcoTlmQEudrfgMIuFl5ZRWWmlts4v9leDVCpHJVdjr61FX6nmRMHXnDpVgtpoRVlZzUCwnXgsiretE8kZRzM3rsXITLaJ38NJW4MFj1kpdnqaejHZZjYjP1GA5mQedToFDpNoVKXAYNRisJpRKcuw6KrQanRiqJx/AB3ArvK0oebsAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="hybrid image"\n        title=""\n        src="/static/41550c920b20ec6c2517d9861b67877a/74866/hybrid-image.png"\n        srcset="/static/41550c920b20ec6c2517d9861b67877a/ff46a/hybrid-image.png 325w,\n/static/41550c920b20ec6c2517d9861b67877a/a6d36/hybrid-image.png 650w,\n/static/41550c920b20ec6c2517d9861b67877a/74866/hybrid-image.png 668w"\n        sizes="(max-width: 668px) 100vw, 668px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),l.createElement(t.p,null,l.createElement(t.a,{href:"https://github.com/jagaldol/computer-vision-4-1/tree/main/2.%20gaussian%20filter%20and%20hybrid%20image"},"gaussian filter and hybrid image")),l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 480px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/7d7e09cda187519acfa74f0996e884dd/e85cb/canny-edge.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 56.30769230769231%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABoUlEQVR42k2SWY+CQBCER10xuGpQ8VYUBa8F71vEeD9gfPH//xe/Hc1m62HSM1R1V3cjcrlcJBIJhUKGYZTLZSGRSqUcxykWi7zYtl0oFHjRNI1gOBy2Wi1VVbPZrOAOOx6P12q1b4l6vb7f733fXywW0+nUkbAsq9vtzmaz0WgEgbjRaIhMJoNY1/Xlcgl7vV5fr9fz+bzb7Yh5KZVKPxIoPc9DnM/nPx7D4XAsFuODL4Hs+XwS3G43xM1mMwiCy+UC4fF4oMTzYDCgR7oQ+IRB2e12ezwekVGZ4O8FzOfzdrvtui4p7vc7dkgHQaTTaQZWqVQmkwlWER8OB755EsSc4/G43+8zKgpyMh1m0ev1xH/ghGFA3Ww25EJAek6mRZ90x1JQcmUFmBcMncpvMbN5b4LxMgs6PJ1OsDGMbbpjNZ1OhxgCSX9XyqpJHI1GEfBEWdimaVKcnZHOliApSq6shuLVavVjOJlMUoEzkUgwJxi4encLuFKNk1bRs2TaIZ34kqAZRVH4pXCON34ANAwZHha4WhJsm6Sr1YqOXNd9AQxYYHDkZW1YAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="canny edge"\n        title=""\n        src="/static/7d7e09cda187519acfa74f0996e884dd/e85cb/canny-edge.png"\n        srcset="/static/7d7e09cda187519acfa74f0996e884dd/ff46a/canny-edge.png 325w,\n/static/7d7e09cda187519acfa74f0996e884dd/e85cb/canny-edge.png 480w"\n        sizes="(max-width: 480px) 100vw, 480px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),l.createElement(t.p,null,l.createElement(t.a,{href:"https://github.com/jagaldol/computer-vision-4-1/tree/main/3.%20canny%20edge%20detection"},"canny edge detection")),l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 967px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/4a8237a792db7d8a10203cc58ace217e/aa08e/library_matchRANSAC.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 43.38461538461538%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAIAAAC9o5sfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB9UlEQVR42nWQ3WvaYBTGX+8EvfTCdhXqBwxBJXFWXUyjoo6OXpi23kjm2MqwbOsHJCi0mpho0lkbzdf8qlq1bt1wWxnbzf68vVsvxx4OB845z+HHOUAUxXd/JUmSeB+i2JAkQZLYep3leaPXG47H4+kUZq3b7Whaq9WCnkqlAhRF4TiuWq3C1lDXR62WWqnIDNOh6e7pqXF21imVzo+P3/P8j9Hokywv+/1et6uqqizLAAIH/b6uqh/n87v5/OvV1a1hLC4vvzSbb7e2mN3dlzj+eHX1JJv9ZRjfZPn7YjG7vi4UCjzPA4qiJpPJbDyG2ItSyWDZz7p+q+v1cjmwvp7LZJ6TZGpj44Sift7cfBgO75bL18ViKBTK5XKA2NzkajVF02qCUOW4F/v7NE2fNxrbqdTDlZV0OPwkEsERZDudfnNwQOXzzygqk8nEMCyZTIJ4PC4Iwmw67RlGX9NYhmmUyxcs+5QgXA7HIxRlGOZVsbizt0fE41gsFgwGnU6n1+v1+/0AwzA4hsuTwaDTbivttqZpdVEkEokHa2s+nw/HcRRBXC6X3W53OBw2m81isZjNZqvVCjweTyAQaDabiqoeHh1lSTKfzyMI4na7IQRF0T8mAEwmE/hXkB6JRODbdkgSuiEHluFwGJ6USCSi0SiEgP/oN7rUxYkA+JobAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="RANSAC"\n        title=""\n        src="/static/4a8237a792db7d8a10203cc58ace217e/aa08e/library_matchRANSAC.png"\n        srcset="/static/4a8237a792db7d8a10203cc58ace217e/ff46a/library_matchRANSAC.png 325w,\n/static/4a8237a792db7d8a10203cc58ace217e/a6d36/library_matchRANSAC.png 650w,\n/static/4a8237a792db7d8a10203cc58ace217e/aa08e/library_matchRANSAC.png 967w"\n        sizes="(max-width: 967px) 100vw, 967px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),l.createElement(t.p,null,l.createElement(t.a,{href:"https://github.com/jagaldol/computer-vision-4-1/tree/main/4.%20RANSAC"},"RANSAC")),l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1000px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/1ab80f8b45d1dd2054c28d27bf6440d1/00d43/panorama.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 60%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAIAAADtbgqsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC5ElEQVR42mMQt84Vt82TsM0TNU8TtUgTt8mSsMuVcSqUdSmRcy2V9yhX8K5S8qnSDOsS0XJhYGBgZGRigANZlzIZl1IgkrTPE7fLl3IqlnWrEHcqlfWsUvGvUwlsUAtu1gxp0U+YImnkC1TPxMSM0KwSUK/kWyPvUyPnWaXuU+md1ZPTOLOkZ5lT5mTNyE6t6B69uD79+D6L7PnyliEQmxmBJBMzIzMbg1HadMO06aZxnY7hJa7h+fEFLWFx+TPnLJ27dH1B21z33CnOhXM8yxa4Viw3i2vR9UiwiS6zT2ryLJgUXb+AIa5na0LDIp/w/OKiur7J86bPXtzWOSUkPD0lvbi5fcKi1VtXbj+6cPOR5oV72ledWHbgxpaTt+fsvLzt9J0jlx8wzJu3vKaqbdac5XcePtt3+HRlZeOOXXtKSutbWnuBmhev3LBz36FDJ88ePHlx//Hzpy5ePXv11rGzV4+cvrz1wCmGuw+evHz/+fqte739U7My8opyC5ctW3Xw2Klrd+5v2Lpr8vS5M+csLK5qmjxn2cZdh85cuXEGqPn8tR2HTq/aepBh9aw5K2fNLU/PstQzdLJ3srKy09bU9fcJTEvPmTxt5rnL185eu1XfO2vi3OWrN+7YvnvvnsPHtuw9AjTmwKnLDN6qyi6Kih4Ghs429iGBwenJaZrq2tam5mqKKhLiMp7u3u1tnYdPnDlw/MzGXQfnrdg8beGa3qnzSmvb1mzZzeBjbu5lahphZ7t/994rV2/kZ+doqGrYW9v4eXnqaOmKiUlJSciEBYWWl1ZU1TTkFNc4ByS6BiU5+8fFpxcxRLs6Rbo4BdhYVuTmlmVlBbk42ZmZ62rqmBga21haWpqYWpiaS0nJSohKaKlrqaqoCwmJsXHwcXAL8wmIM+zeuX/Hjr0rV60tzi/UVVN3srSyNDAy1TOwMDI2MzQO9vHKSU2eNn2mt5efjJSctJScqKgkEAkIinFzCwAAevInqR8+lJgAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Panorama"\n        title=""\n        src="/static/1ab80f8b45d1dd2054c28d27bf6440d1/00d43/panorama.png"\n        srcset="/static/1ab80f8b45d1dd2054c28d27bf6440d1/ff46a/panorama.png 325w,\n/static/1ab80f8b45d1dd2054c28d27bf6440d1/a6d36/panorama.png 650w,\n/static/1ab80f8b45d1dd2054c28d27bf6440d1/00d43/panorama.png 1000w"\n        sizes="(max-width: 1000px) 100vw, 1000px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),l.createElement(t.p,null,l.createElement(t.a,{href:"https://github.com/jagaldol/computer-vision/tree/main/5.%20Panorama%20Stitching"},"Panorama Stitching")),l.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 1000px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/9d9f4d1ca90aea2a4d53398aff9af738/00d43/warrior.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 50.153846153846146%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAA9hAAAPYQGoP6dpAAACE0lEQVR42nWSTWsTURSG++/c+A/cKC5ciBsRNxWkSLuUSsGNOxWFFqpYQVpqRW3VCKY1aZNom7T5mrkzc+czmXxN0sczA7Wh6IHDOXPvnee+59wzwz9sPJ5k/j87PT0lScZZvGgzZ0m306ET+nTjENOqo6wGvTiS9YDBoCc+oBP5xJ2IMHJptWtEoUe/L/91IxEwPgemahy7RRg0CPQhv3OrOKqJ72m0UviOj+97eNaJXNrkcG8Nq1mUfU+iQtUMhnLhX2Ai9EDb7H/fY3c7x+rDObaXXxE2PexfdSJbi6oAWx1RLuxS3HzL2uI8qiJ7jRaBEuBoOKVwMsZqmLTKVcr5Ii/mb1L/ukzcjXHNJqHvEvgB1R9l8ls5vm1ssrJwFbtZQscd2rYhLZkCjoTeMhSGFhXhgCdLCzyau0O9rTDDDm4QSksctOsRy9l8ocjc3Rss3rtNtViRsoMLJScjTo4V+4U2+S9FHs8+4Pqly2y8fIZR83CVLzBNqWJQKSl2P/9kafY+t65c49P7jxw3tDxOf1rhCM9zsW3Fzs4HCns5Vp4/ZX19i7YZYTuB7HuYhkvlsMqbd6+pHR1QKuSxtUU/iRkOp0pOP7TWUpadgT3JtcCVamM6Ctt1MmAUaFzHlH6mPZVXT6dAgJZp0Ov1zoHpgKZzlHqqdpQkmSdpHI4YS5xMJtk0ZGvpmdRFyFl+NuR/AMHT41EKv/mVAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="warrior"\n        title=""\n        src="/static/9d9f4d1ca90aea2a4d53398aff9af738/00d43/warrior.png"\n        srcset="/static/9d9f4d1ca90aea2a4d53398aff9af738/ff46a/warrior.png 325w,\n/static/9d9f4d1ca90aea2a4d53398aff9af738/a6d36/warrior.png 650w,\n/static/9d9f4d1ca90aea2a4d53398aff9af738/00d43/warrior.png 1000w"\n        sizes="(max-width: 1000px) 100vw, 1000px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),l.createElement(t.p,null,l.createElement(t.a,{href:"https://github.com/jagaldol/computer-vision-4-1/tree/main/6.%20Epipolar%20Geometry"},"Epipolar Geometry")),l.createElement(t.p,null,l.createElement(t.a,{href:"https://github.com/jagaldol/computer-vision-4-1/tree/main/7.%20Convolutional%20Neural%20Networks"},"Convolutional Neural Networks"))))}var r=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?l.createElement(t,e,l.createElement(i,e)):i(e)},s=a(8032),c=a(4856),o=a(6657),m=a(3634),g=a(1852);function d(e){let{deploy_link:t}=e;const{0:a,1:n}=(0,l.useState)(!1),{0:i,1:r}=(0,l.useState)(!1),{0:s,1:c}=(0,l.useState)(!1),o=(0,l.useRef)(null),m=(0,l.useRef)(null),g=()=>{if(o.current){const e=o.current.getBoundingClientRect().top;c(e<=50)}};return(0,l.useEffect)((()=>{s&&(i||(r(!0),m.current&&clearTimeout(m.current),m.current=setTimeout((()=>{r(!1)}),1e3)))}),[s]),(0,l.useEffect)((()=>{const e=setTimeout((()=>{n(!0)}),1e3);return window.addEventListener("scroll",g),()=>{clearTimeout(e),window.removeEventListener("scroll",g),m.current&&clearTimeout(m.current)}}),[]),l.createElement("div",{ref:o,className:"absolute top-0 left-0 w-full h-full"},l.createElement("a",{href:t,className:"w-full h-full opacity-0 "+(i?"opacity-100":"")+" "+(a?"group-hover:opacity-100":"")+" bg-gradient-to-tl from-main-theme to-main-theme/60 z-10 transition-all duration-500 text-white flex drop-shadow-2xl"},l.createElement("h3",{className:"absolute right-0 bottom-0 text-3xl max-md:text-2xl max-sm:text-lg max-sm:-translate-y-3 -translate-x-8 -translate-y-5"},"바로가기")))}function p(e){let{data:t,children:a}=e;const{title:n,subtitle:i,stack:r,banner:o,start_date:p,end_date:u,deploy_link:b}=t.mdx.frontmatter,A=(0,s.c)(o),h=new Date(p),f=new Date(u),E=h.getFullYear()+"."+(h.getMonth()+1)+"."+h.getDate()+". ~ "+f.getFullYear()+"."+(f.getMonth()+1)+"."+f.getDate()+".",y=t.imagesHeight400.edges.map((e=>(0,s.c)(e.node))),x=t.imagesHeight200.edges.map((e=>(0,s.c)(e.node))),w=t.imagesHeight400.edges.map((e=>e.node.childImageSharp.original.src));return l.createElement(c.Z,null,l.createElement("div",{className:"mt-10 w-full flex justify-center"},l.createElement("div",{className:"w-[1300px] max-2xl:w-[1000px] max-xl:w-[1000px] max-lg:w-[700px] max-md:w-full"},l.createElement("div",{className:"mb-8"},l.createElement("h1",null,n),l.createElement("p",null,i),l.createElement("p",{className:"text-end"},E)),l.createElement("div",{className:"group relative mb-2"},A?l.createElement(l.Fragment,null,l.createElement(s.G,{alt:n+" 대표 이미지",loading:"eager",image:A,objectFit:"contain"}),b?l.createElement(d,{deploy_link:b}):null):null),l.createElement("div",{className:"flex gap-1 justify-end items-center flex-wrap"},r.map((e=>l.createElement("div",{className:"h-7",key:e},l.createElement(m.Z,{name:e}))))),y.length>0&&l.createElement(g.Z,{imageList400:y,imageList200:x,srcList:w}),l.createElement("div",{className:"markdown-body"},a))))}function u(e){return l.createElement(p,e,l.createElement(r,e))}const b=e=>{let{data:t}=e;return l.createElement(o.Z,{title:t.mdx.frontmatter.title,description:t.mdx.frontmatter.subtitle,pathname:"/projects/"+t.mdx.frontmatter.slug+"/",image:t.mdx.frontmatter.image.childImageSharp.original.src})}},1852:function(e,t,a){a.d(t,{Z:function(){return g}});var n=a(7294),l=a(8032),i=a(6467),r=a(9417),s=a(7814),c=a(2932);function o(e){let{srcList:t,number:a,close:l,toLeft:i,toRight:o}=e;const{lockScroll:m,openScroll:g}=(0,c.Z)();return(0,n.useEffect)((()=>(m(),()=>{g()})),[]),n.createElement("div",{className:"fixed z-[500] top-0 bottom-0 left-0 right-0 bg-black/80 flex justify-center"},n.createElement("div",{className:"w-[1400px] flex flex-col items-center justify-center"},n.createElement("div",{className:"flex w-full justify-end pr-10 max-md:pr-5"},n.createElement("button",{type:"button","aria-label":"닫기",onClick:l},n.createElement(s.G,{icon:r.g82,color:"white",size:"3x"}))),n.createElement("div",{className:"px-5 h-[80%] flex items-center",onClick:e=>{const t=e.target,{width:a}=t.getBoundingClientRect(),{clientX:n}=e;n-t.offsetLeft<a/2?i():o()}},n.createElement("img",{src:t[a],alt:t[a],className:"max-w-full max-h-full flex-1 object-contain"})),n.createElement("div",{className:"flex items-center"},n.createElement("div",{className:"mx-7 max-lg:mx-4"},n.createElement("button",{type:"button","aria-label":"왼쪽 더보기",className:"bg-white rounded-full shadow-[0_1px_2px_0_rgba(0,0,0,0.3)] h-14 w-14 max-lg:h-10 max-lg:w-10 "+(a>0?"":"invisible"),onClick:i},n.createElement(s.G,{size:"lg",icon:r.EyR}))),n.createElement("p",{className:"text-white text-xl w-32 text-center"},a+1," / ",t.length),n.createElement("div",{className:"mx-7 max-lg:mx-4"},n.createElement("button",{type:"button","aria-label":"오른쪽 더보기",className:"bg-white rounded-full shadow-[0_1px_2px_0_rgba(0,0,0,0.3)] h-14 w-14 max-lg:h-10 max-lg:w-10 "+(a<t.length-1?"":"invisible"),onClick:o},n.createElement(s.G,{size:"lg",icon:r.yOZ}))))))}function m(e){let{imageList:t,onClickImage:a}=e;const c=(0,i.Gc)(),o=(0,n.useRef)(null),{0:m,1:g}=(0,n.useState)(!0),{0:d,1:p}=(0,n.useState)(!1),u=()=>{if(o.current){const{scrollLeft:e,scrollWidth:t,clientWidth:a}=o.current;console.log({scrollLeft:e,scrollWidth:t,clientWidth:a});const n=e<=0;p(e+a>=t),g(n)}};return(0,n.useEffect)((()=>{const e=o.current;return e&&(e.addEventListener("scroll",u),u()),()=>{e&&e.removeEventListener("scroll",u)}}),[]),n.createElement(n.Fragment,null,!m&&n.createElement("div",{className:"absolute z-10 -left-7 max-lg:-left-4 top-0 bottom-0 flex items-center"},n.createElement("button",{type:"button","aria-label":"왼쪽 더보기",className:"bg-white rounded-full shadow-[0_1px_2px_0_rgba(0,0,0,0.3)] h-14 w-14 max-lg:h-10 max-lg:w-10",onClick:()=>{o.current&&o.current.scrollBy({left:c.lg?-350:-800,behavior:"smooth"})}},n.createElement(s.G,{size:"lg",icon:r.EyR}))),n.createElement("div",{className:"flex gap-5 overflow-x-scroll hide-scroll-bar",ref:o},t.map(((e,t)=>{var i;return n.createElement("button",{type:"button",onClick:()=>a(t),"aria-label":t+" 번째 이미지",key:(null===(i=e.images.fallback)||void 0===i?void 0:i.src)||"image-"+t},n.createElement(l.G,{alt:t+" 번째 이미지",image:e,className:"rounded-xl h-full min-w-max hover:cursor-pointer",objectFit:"contain"}))}))),!d&&n.createElement("div",{className:"absolute z-10 -right-7 max-lg:-right-4 top-0 bottom-0 flex items-center"},n.createElement("button",{type:"button","aria-label":"오른쪽 더보기",className:"bg-white rounded-full shadow-[0_1px_2px_0_rgba(0,0,0,0.3)] h-14 w-14 max-lg:h-10 max-lg:w-10",onClick:()=>{o.current&&o.current.scrollBy({left:c.lg?350:800,behavior:"smooth"})}},n.createElement(s.G,{size:"lg",icon:r.yOZ}))))}function g(e){let{imageList400:t,imageList200:a,srcList:l}=e;const r=(0,i.Gc)(),{0:s,1:c}=(0,n.useState)(!1),{0:g,1:d}=(0,n.useState)(0),p=e=>{d(e),c(!0)};return n.createElement("div",{className:"flex justify-center my-10 bg-neutral-200 relative"},r.lg?n.createElement(m,{onClickImage:p,imageList:a}):n.createElement(m,{onClickImage:p,imageList:t}),s?n.createElement(o,{srcList:l,number:g,close:()=>c(!1),toLeft:()=>d(g-1<0?0:g-1),toRight:()=>d(g+1>l.length-1?l.length-1:g+1)}):null)}},1151:function(e,t,a){a.d(t,{ah:function(){return i}});var n=a(7294);const l=n.createContext({});function i(e){const t=n.useContext(l);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}}}]);
//# sourceMappingURL=component---src-templates-project-details-tsx-content-file-path-src-projects-minor-computer-vision-lab-mdx-04f128ea2b4320d79e8d.js.map