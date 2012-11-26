var reqObj = new Object();

reqObj.READY_STATE_INITIALIZED = 0;
reqObj.READY_STATE_LOADING = 1;
reqObj.READY_STATE_LOADED = 2;
reqObj.READY_STATE_INTERACTIVE = 3;
reqObj.READY_STATE_COMPLETE = 4;

reqObj.ContentLoader = function(url,onload,onerror){
    this.url=url;
    this.req=null;
    this.onload=onload;
    this.onerror=(onerror)? onerror: this.defaultError;
    this.loadXMLDoc(url);
};

reqObj.ContentLoader.prototype.loadXMLDoc = function(url){
        if (window.XMLHttpRequest)
        {
            this.req = new XMLHttpRequest();
        }
        else if (window.ActiveXObject)
        {
            this.req = new ActiveXObject();
        }
        if (this.req){
            try{
                var loader = this;
                this.req.open("GET",url,true);
                this.req.onreadystatechange = function(){
                    if (this.readyState == reqObj.READY_STATE_COMPLETE){
                        var httpStatus = this.status;
                        if (httpStatus == 200 || httpStatus == 0){
                            loader.onload.call(this);
                        }else{
                            loader.ContentLoader.onerror.call(this);
                        }
                    }
                }

                this.req.send(null);
            }catch (err){
                this.onerror.call(this);
            }
        }
    };
reqObj.ContentLoader.prototype.onReadyState= function(){
        var req = this.req;
        var ready = this.readyState;
        if (ready == reqObj.READY_STATE_COMPLETE){
            var httpStatus = req.status;
            if (httpStatus == 200 || httpStatus == 0){
                this.onload.call(this);
            }else{
                this.onerror.call(this);
            }
        }
    };

reqObj.ContentLoader.prototype.defaultError= function(){
    alert("error fetching data!" +
        "\n\nreadyState:" + this.req.readyState+
        "\n\nstatus:" + this.req.status);
};

var answerToInfo = function(){
    var newArticle = document.createElement("article");
    $(newArticle).html("<div class='info'>"+this.responseText+"</div> ");
    $("#articles").html(newArticle);
};
