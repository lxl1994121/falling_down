var bgy=0;

function draw_bg () {
	ctx.clearRect(box.x,box.y,box.width,box.height);   

	ctxBg.drawImage(bgImage,0,0,900,1600,0,bgy,360,640);
    ctxBg.drawImage(bgImage,0,0,900,1600,0,640+bgy,360,640);
    bgy = bgy-0.5;
    if (bgy<-640) {
        bgy=0;
    };
    //ctxBg.drawImage(bgImage,0,0,900,1600,0,0,360,640);
}