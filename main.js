var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg", function(Img){
        img_obj = Img;
        
        img_obj.scaleToWidth(800);
        img_obj.scaleToHeight(610);

        img_obj.set({
            top:0, left:0
        });
        canvas.add(img_obj);
    });
	
}

function playSound(){
	x.play();
}
