(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[392],{1452:(e,t,a)=>{var r=Object.create,s=Object.defineProperty,l=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,i=Object.getPrototypeOf,n=Object.prototype.hasOwnProperty,p=(e,t,a)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,h=(e,t,a,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let i of o(t))n.call(e,i)||i===a||s(e,i,{get:()=>t[i],enumerable:!(r=l(t,i))||r.enumerable});return e},u=(e,t,a)=>(p(e,"symbol"!=typeof t?t+"":t,a),a),y={};((e,t)=>{for(var a in t)s(e,a,{get:t[a],enumerable:!0})})(y,{default:()=>P}),e.exports=h(s({},"__esModule",{value:!0}),y);var d=((e,t,a)=>(a=null!=e?r(i(e)):{},h(!t&&e&&e.__esModule?a:s(a,"default",{value:e,enumerable:!0}),e)))(a(2115)),c=a(1599),m=a(1409);class P extends d.Component{constructor(){super(...arguments),u(this,"callPlayer",c.callPlayer),u(this,"mute",()=>{this.setVolume(0)}),u(this,"unmute",()=>{null!==this.props.volume&&this.setVolume(this.props.volume)}),u(this,"ref",e=>{this.container=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){let{playing:t,config:a,onError:r,onDuration:s}=this.props,l=e&&e.match(m.MATCH_URL_VIDYARD)[1];this.player&&this.stop(),(0,c.getSDK)("https://play.vidyard.com/embed/v4.js","VidyardV4","onVidyardAPI").then(e=>{this.container&&(e.api.addReadyListener((e,t)=>{this.player||(this.player=t,this.player.on("ready",this.props.onReady),this.player.on("play",this.props.onPlay),this.player.on("pause",this.props.onPause),this.player.on("seek",this.props.onSeek),this.player.on("playerComplete",this.props.onEnded))},l),e.api.renderPlayer({uuid:l,container:this.container,autoplay:t?1:0,...a.options}),e.api.getPlayerMetadata(l).then(e=>{this.duration=e.length_in_seconds,s(e.length_in_seconds)}))},r)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){window.VidyardV4.api.destroyPlayer(this.player)}seekTo(e,t=!0){this.callPlayer("seek",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}setPlaybackRate(e){this.callPlayer("setPlaybackSpeed",e)}getDuration(){return this.duration}getCurrentTime(){return this.callPlayer("currentTime")}getSecondsLoaded(){return null}render(){let{display:e}=this.props;return d.default.createElement("div",{style:{width:"100%",height:"100%",display:e}},d.default.createElement("div",{ref:this.ref}))}}u(P,"displayName","Vidyard"),u(P,"canPlay",m.canPlay.vidyard)}}]);