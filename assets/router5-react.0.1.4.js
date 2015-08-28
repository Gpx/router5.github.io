/**
 * @license
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 router5
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
(function(){"use strict";function e(e){return React.createClass({propTypes:{routeName:React.PropTypes.string.isRequired,routeParams:React.PropTypes.object,routeOptions:React.PropTypes.object,activeClassName:React.PropTypes.string,activeStrict:React.PropTypes.bool,onClick:React.PropTypes.func},getDefaultProps:function t(){return{activeClassName:"active",activeStrict:false,routeParams:{},routeOptions:{}}},getInitialState:function r(){return{active:e.isActive(this.props.routeName,this.props.routeParams,this.props.activeStrict)}},shouldComponentUpdate:function n(t,r){return!e.areStatesEqual({name:t.routeName,params:t.routeParams},{name:this.props.routeName,params:this.props.routeParams})||this.state.active!==r.active},clickHandler:function a(t){var r=event.metaKey||event.altKey||event.ctrlKey||event.shiftKey;if(t.button===0&&!r){t.preventDefault();e.navigate(this.props.routeName,this.props.routeParams,this.props.routeOptions)}},routeChangeHandler:function i(t,r){this.setState({active:e.isActive(this.props.routeName,this.props.routeParams)})},componentDidMount:function o(){e.addListener(this.routeChangeHandler)},componentWillUnmount:function s(){e.removeListener(this.routeChangeHandler)},render:function c(){var t=this.props;var r=this.state.active;var n=e.buildUrl(t.routeName,t.routeParams);var a=(t.className?t.className.split(" "):[]).concat(r?[t.activeClassName]:[]).join(" ");var i=t.onClick||this.clickHandler;return React.createElement("a",{href:n,className:a,onClick:i},t.children)}})}function t(e){return function(t,r){return{nodeListener:function n(e,t){r.call(this,e,t)},componentDidMount:function a(){if(r)e.addNodeListener(t,this.nodeListener);e.registerComponent(t,this)},componentWillUnmount:function i(){if(r)e.removeNodeListener(t,this.nodeListener);e.deregisterComponent(t,this)}}}}window.linkFactory=e;window.segmentMixinFactory=t})();
