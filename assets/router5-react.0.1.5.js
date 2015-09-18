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
(function(){"use strict";function e(e){return React.createClass({propTypes:{routeName:React.PropTypes.string.isRequired,routeParams:React.PropTypes.object,routeOptions:React.PropTypes.object,activeClassName:React.PropTypes.string,activeStrict:React.PropTypes.bool,onClick:React.PropTypes.func},getDefaultProps:function t(){return{activeClassName:"active",activeStrict:false,routeParams:{},routeOptions:{}}},getInitialState:function n(){return{active:e.isActive(this.props.routeName,this.props.routeParams,this.props.activeStrict)}},clickHandler:function r(t){if(this.props.onClick){this.props.onClick(t);if(t.defaultPrevented){return}}var n=event.metaKey||event.altKey||event.ctrlKey||event.shiftKey;if(t.button===0&&!n){t.preventDefault();e.navigate(this.props.routeName,this.props.routeParams,this.props.routeOptions)}},routeChangeHandler:function i(t,n){this.setState({active:e.isActive(this.props.routeName,this.props.routeParams)})},componentDidMount:function o(){e.addListener(this.routeChangeHandler)},componentWillUnmount:function s(){e.removeListener(this.routeChangeHandler)},render:function a(){var t=this.props;var n=this.state.active;var r=e.buildUrl(t.routeName,t.routeParams);var i=(t.className?t.className.split(" "):[]).concat(n?[t.activeClassName]:[]).join(" ");var o=this.clickHandler;return React.createElement("a",{href:r,className:i,onClick:o},t.children)}})}function t(e){return function(t,n){return{nodeListener:function r(e,t){n.call(this,e,t)},componentDidMount:function i(){if(n)e.addNodeListener(t,this.nodeListener);e.registerComponent(t,this)},componentWillUnmount:function o(){if(n)e.removeNodeListener(t,this.nodeListener);e.deregisterComponent(t,this)}}}}window.linkFactory=e;window.segmentMixinFactory=t})();
