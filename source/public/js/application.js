var js_images = [];

$(document).ready(function(){
    $(".full img").on("click", function() {
        $(this).toggleClass("zoom");
    });
    
    if (typeof rnd_image_files !== 'undefined') {
        $.each(rnd_image_files, function(i, f){
            js_images[i] = new Image();
            js_images[i].src = "/public/images/index-covers/" + f;
        });
        window.setTimeout(irq_loader, 1 * 60 * 1000);
    }
    
    if (window.location.pathname == '/') {
        $("#latest-posts time").each(function(i, obj){
            var t = moment($(obj).attr("datetime"));
            obj.innerText = t.fromNow();
        });
        
        $.ajax({
            type: 'GET',
            url: 'https://api.github.com/users/vigo/repos?sort=pushed',
            dataType: "json",
            error: function(err){
                $("#github-latests").html('GitHub&rsquo;dan repo&rsquo;ları yükleyemedim...');
            },
            success: function(data){
                var html = ['<ul class="list-unstyled list-latest-posts">'],
                    need_data = data.filter(function(obj, index){
                        if(!obj.fork){ return true; }
                    });
                $.each(need_data, function(index, repo){
                    if(index < 10){
                        var t = moment(repo.pushed_at);
                        html.push('<li>');
                        html.push('<h4><a href="' + repo.html_url + '">' + repo.full_name + '</a> <time pubdate datetime="' + repo.pushed_at + '">' + t.fromNow() + '</time></h4>');
                        html.push('<p><span class="sgazer">[ ★ ' + String(repo.stargazers_count).padStart(3, '0') + ' ]</span> <span class="repo-desc">' + repo.description + '</span></p>');
                        html.push('</li>');
                    }
                });
                html.push('</ul>');
                $("#github-latests").html(html.join("\n"));
            }
        });
    }
    
});

function irq_loader(){
    var r = Math.ceil(Math.random() * js_images.length - 1),
        f = js_images[r].src;

    $(".page-cover").css({"background-image": "url(" + f +")"});
    irq = window.setTimeout(irq_loader, 5 * 60 * 1000);
}
