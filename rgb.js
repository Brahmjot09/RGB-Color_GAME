//Squares Count
var squrcount=6
// Randomly geenerated Color array List
var colorlist=[];
// Picking a random Color from 👆 Color List 
var pckdcolor;

// Array of all squares
var squares=document.querySelectorAll('.squares')
// Selecting Mode Buttons
var modebtn=document.querySelectorAll('.mode');
var resetbtn=document.querySelector('#reset');
var mssg=document.querySelector('.mssg')
var h1=document.querySelector('h1')

init();


function init()
 
{	modebtnlisteners();
	squareslisteners();
	reset();
};

function modebtnlisteners()
{
	// Mode button Event Listener 
	for(var i=0;i<modebtn.length;i++)
	{
		modebtn[i].addEventListener('click',function()
		{
			modebtn[0].classList.remove('selected');
			modebtn[1].classList.remove('selected');
			this.classList.add('selected');
			this.textContent==='Easy'?squrcount=3:squrcount=6;
			reset();
		});
	}
};

function squareslisteners()
{
	for (var i =0 ; i <squares.length; i++) 
	{  // Checking for color match when clicked on a color square
	   squares[i].addEventListener('click',function()
	   {	
	   		
	   		//console.log(this.style.backgroundColor,pckdcolor)
	   		if(this.style.backgroundColor===pckdcolor)
	   			
	   			{
	   				ta.textContent='Correct!';
	   				mtchcrrtcolor(pckdcolor);
	   				h1.style.background=pckdcolor;
					mssg.textContent='Play Again ?';
	   			}
	   		else
	   			{
	   				this.style.backgroundColor='rgba(13, 36, 104, .1)';
	   				ta.textContent='Try again !';
	   			}
		}
	);
	}
};


////////////////////////////////////////////////////////////////////

function reset()
{
	//generate new colors
	colorlist=gnrate_rndmcolor(squrcount)
	//pick a random color
	pckdcolor=rndmcolor()
	//change color to new picked color
	slctcolor.textContent=pckdcolor	
	//change color of all squares
	for (var i=0;i<squares.length;i++)
	{
		if(colorlist[i])
			{	squares[i].style.backgroundColor=colorlist[i];
				squares[i].style.display='block';
			}
		else
			squares[i].style.display='none';
	}
	//reset the h1
	var h1=document.querySelector('h1');
	h1.style.backgroundColor='#d57c50';
	//reset the ta
	ta.textContent='';
	//reset the mssg
	mssg.textContent='New Colors!';
};

///////////////////////////////////////////////////////////////////


resetbtn.addEventListener('click',function()
{
	reset();
});


// Picks a random color from Color List
function rndmcolor()
{
	var rndcolor=Math.floor(Math.random() *colorlist.length)
	return colorlist[rndcolor]
};


// Changes all squares to Randomly Picked Color
function mtchcrrtcolor(a)
{
	for (var i=0 ; i<squares.length; i++) 
	{
		// change all squares to correct color
		squares[i].style.backgroundColor=a;
	}
};

/// Generates a random Color
function giverndmcolor()
{
	//pick rndom red 0-255\
	var r=Math.floor(Math.random() *256);
	
	//pick rndom green 0-255
	var g=Math.floor(Math.random() *256);
	
	//pick rndom blue 0-255
	var b=Math.floor(Math.random() *256);

	return 'rgb('+r+', '+g+', '+b+')'

}
// Generates Random Color array
function gnrate_rndmcolor(a)
{
		//ce-reate an array 
		var arr=[]
		
		//generate rondom color
		for (var i = 0;i<a ; i++) 
		{
			arr[i]=giverndmcolor()
		}
		//return the array
		return arr
}


