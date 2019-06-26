!function(){
	function writeCode(prefix, code, fn){
		let container = document.querySelector('#code')
		let styleTag = document.querySelector('#styleTag')
		let n = 0
		let id = setInterval(()=>{
			n += 1
			container.innerHTML = code.substring(0,n)
			styleTag.innerHTML = code.substring(0,n)
			container.scrollTop = container.scrollHeight
			if(n >= code.length){
				window.clearInterval(id)
				fn && fn.call()
			}
		}, 20)
	}
	let code = `
/*
 * 首先，需要准备皮卡丘的皮
 */

.preview{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items:center;
    background: #FEE433;
}
.wrapper{
    width: 100%;
    height: 196px;
    position: relative;
}

/*
 * 接下来，画一只鼻子
 */

.nose{
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 12px;
    border-color: black transparent transparent;
    border-radius: 11px;
    position: absolute;
    top: 28px;
    left: 50%;
    margin-left: -12px;
}

/*
 * 然后画皮卡丘的两只眼睛
 */

.eye{
    width: 49px;
    height: 49px;
    background: #2E2E2E;
    position: absolute;
    border-radius: 50%;
    border: 2px solid #000000;
}

/*
 * 眼睛里面的眼珠
 */

.eye::before{
    content: '';
    display: block;
    width: 26px;
    height: 26px;
    background: white;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 5px;
    border: 2px solid #000;
}

/*
 * 左眼在左边
 */

.eye.left{
    right: 50%;
    margin-right: 80px;
}

/*
 * 右眼在右边
 */

.eye.right{
    left: 50%;
    margin-left: 80px;
}

/*
 * 然后，画皮卡丘的脸蛋
 */

.face{
    width: 68px;
    height: 68px;
    background: #FC0D1C;
    border: 3px solid black;
    border-radius: 50%;
    position: absolute;
    top: 88px;
}

/*
 * 将脸放到正确的位置
 */

.face.left{
    right: 50%;
    margin-right: 110px;
}
.face.right{
    left: 50%;
    margin-left: 110px;
}

/*
 * 上嘴唇
 */

.upperLip{
    height: 25px;
    width: 80px;
    border: 3px solid black;
    position: absolute;
    top: 48px;
    background: #FEE433;
}
.upperLip.left{
    border-right: none;
    border-top: none;	
    border-bottom-left-radius: 40px 25px;
    transform: rotate(-20deg);
    right: 50%;
}
.upperLip.right{
	border-left: none;
    border-top: none;
    border-bottom-right-radius: 40px 25px;
    transform: rotate(20deg);
    left: 50%;
}

/*
 * 下嘴唇
 */

.lowerLip-wrapper{
    width: 180px;
    height: 140px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -90px;
    overflow: hidden;
}
.lowerLip{
    width: 180px;
    height: 2000px;
    background: #990513;
    border: 3px solid black;
    border-radius: 200px/1000px;
    position: absolute;
    bottom: 0;
    overflow: hidden;
}

/*
 * 小舌头
 */

.lowerLip::after{
    content: '';
    width: 110px;
    height: 110px;
    background: #FC4A62;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -55px;
    border-radius: 55px;
}

/*
 * 好了，这只皮卡丘送给你
 */
`
	writeCode('', code)
}.call()