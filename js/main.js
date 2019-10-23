!function(){ 
    let duration = 50
    let id = null
    let container = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
	function writeCode(prefix, code, fn){
		let n = 0
		id = setTimeout(function run(){
			n += 1
            // CSS 代码高亮
			container.innerHTML = Prism.highlight(code.substring(0, n), Prism.languages.css, 'css');
			styleTag.innerHTML = code.substring(0,n)
			container.scrollTop = container.scrollHeight
			if(n < code.length){
				id = setTimeout(run, duration)
			}else{
                fn && fn.call()
            }
		}, duration)
	}
    $('.actions').on('click', 'button', function(e){
        let $button = $(e.currentTarget) // 点击的button
        let speed = $button.attr('data-speed')
        $button.addClass('active')
            .siblings('.active').removeClass('active')
        switch(speed){
            case 'slow':
                duration = 100
                break
            case 'normal':
                duration = 50
                break
            case 'fast':
                duration = 10
                break
            case 'exit':
                window.clearTimeout(id)
                container.innerHTML = Prism.highlight(code, Prism.languages.css, 'css');
                styleTag.innerHTML = code
                container.scrollTop = container.scrollHeight
                break
        }
    })
	let code = `/*
 * 用 CSS3 来画一只可爱的皮卡丘吧！
 * 首先，需要准备皮卡丘的“皮”
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
 * 高亮代码
 */
.token.selector{
    color: #690;
}
.token.property{
    color: #905;
}
.token.function{
    color: #dd4a68;
}
.token.punctuation{
    color: #999;
}

/*
 * 接下来是它的鼻子
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
 * 别忘了它的眼眸
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
 * 左眼移动到左边
 */

.eye.left{
    right: 50%;
    margin-right: 80px;
}

/*
 * 右眼也要去右边
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
 * 将脸蛋放到正确的位置
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
 * 最后是小舌头
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