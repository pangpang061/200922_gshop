/*
* 与后台交互模块
* 包含那个接口请求函数
* 函数的返回值：promise对象
* */
import ajax from './ajax'
// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
// 不能直接传{geohash}，这样是一个query参数放在问号后面的.而这个参数是一个param参数
export const reqLoction = (geohash) => ajax(`position/${geohash}`)
// [2、获取食品分类列表](#2获取食品分类列表)<br/>
export const reqFoodList = () => ajax('/index_category')
// [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>
export const reqShopList = (latitude,longitude) => ajax('/shops', {latitude,longitude})
// [4、根据经纬度和关键字搜索商铺列表](#4根据经纬度和关键字搜索商铺列表)<br/>
export const searchShopList = (geohash,keyword) => ajax('/shops', {geohash,keyword})
// [5、获取一次性验证码](#5获取一次性验证码)<br/>
export const reqCaptcha = () => ajax('/captcha')
// [6、用户名密码登陆](#6用户名密码登陆)<br/>
export const reqLogin = (name,pwd,captcha) => ajax('/login_pwd',{name,pwd,captcha})
// [7、发送短信验证码](#7发送短信验证码)<br/>
export const sendPhone = (phone) => ajax('/sendcode',{phone})
// [8、手机号验证码登陆](#8手机号验证码登陆)<br/>
export const Login_sms = (phone,code) => ajax('/login_sms',{phone,code})
// [9、根据会话获取用户信息](#9根据会话获取用户信息)<br/> /userinfo
export const reqUserInfo = () => ajax('/userinfo')
// [10、用户登出](#10用户登出)<br/>
export const LogOut = () => ajax('/logout')
