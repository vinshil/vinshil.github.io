const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,				//吸底模式			
    autoplay: true,            //自动播放
    lrcType: 1,   //歌词载入模式 1为直接在JS文件中写入，3为lrc文件使用但是我总是失败
    audio: [
      {
        name: "芒种",
        artist: "赵方婧",
        url: "http://music.163.com/song/media/outer/url?id=1369798757.mp3",      //歌曲链接
        cover: "http://什么什么.jpg",	//封面
      	// lrc : "[00:00.13] 编曲：接个吻，开一枪\n[00:01.10] 混音......"
      },
    ]
});