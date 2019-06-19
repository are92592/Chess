var blackPiece = document.querySelectorAll(".blackpiece");
var checkersRed = document.querySelectorAll(".redpiece");
var bp1 = document.getElementById("bp1");
var rp1 = document.getElementById("rp1");
var clickLocations = document.querySelectorAll(".square");
var clickLocationsMove = document.querySelectorAll(".sq");
var sq1 = document.getElementById("sq1");
var redPiece = document.querySelectorAll(".redpiece");
var redPieceTrue = document.querySelectorAll(".true");
var pieces = document.querySelectorAll(".piece");
var redCheckedInfo = document.querySelectorAll(".redchecked");
var blackCheckedInfo = document.querySelectorAll(".blackchecked");

//console.log(pieces);

var booleanMoved = false;

var booleanGameOver = false;



for(var i = 0; i < clickLocationsMove.length; i++) {
	var sq = clickLocationsMove[i];
	var sqi = sq.getBoundingClientRect();
	var sqx = sqi.x;
	var sqy = sqi.y;
	if(sq.hasChildNodes().className === "blackpiece")
	{
		//console.log("this is a blackpiece");
	}
	//console.log(sqx, sqy);
}


for(var i = 0; i < pieces.length; i++) {
	var pc = pieces[i];
	var pci = pc.getBoundingClientRect();
	var pcx = pci.x;
	var pcy = pci.y;

	//console.log(pcx, pcy);
}

var checkMate = 1;

game();


function game()

{

//
	var dragged;


	document.addEventListener("drag", function(event) {

	}, false);


	document.addEventListener("dragstart", function(event) {
		var coordStartPoint = "";
		//var coordEndPoint = "";
		dragged = event.target;
		dragged.style.opacity = .5;
		//coordStartPoint = dragged.parentNode();
		coordStartPoint = dragged.getBoundingClientRect();
		var start_y = coordStartPoint.y;
		var start_x = coordStartPoint.x;
		var elem = document.elementFromPoint(13,133);
	
	
	}, false);


	document.addEventListener("dragend", function(event) {
		event.target.style.opacity = "";
	}, false);

	document.addEventListener("dragover", function(event) {
		event.preventDefault();
	}, false);


	document.addEventListener("dragenter", function(event) {

		//if(event.target.className == "vertical horizontal") {
		event.target.style.background = "grey";
	//}
	}, false);

	document.addEventListener("dragleave", function(event) {
	//if(event.target.className == "vertical horizontal") {
		event.target.style.background = "";
	//}
	}, false);
//-2 -4
	document.addEventListener("drop", function(event) {
		event.preventDefault();
		coordStartPoint = dragged.getBoundingClientRect();
		start_y = coordStartPoint.y;
		start_x = coordStartPoint.x;
	//start_yPos = coordStartPoint.
		var coordEndPoint = event.target.getBoundingClientRect();
		var end_x = coordEndPoint.x;
		var end_y = coordEndPoint.y;
		var end_Width = coordEndPoint.width;
		var end_Height = coordEndPoint.height;
	//console.log(end_x);
	//console.log(end_y);
	
		var coordDifferenceX = (start_x - end_x);
		var coordDifferenceY = (start_y - end_y);
	//console.log(coordStartPoint);
	//console.log(coordEndPoint);
	//console.log(coordDifferenceX);
	//console.log(coordDifferenceY);
	//var draggedName = dragged.id;
		console.log(moveAngle(end_y, start_y, end_x, start_x));
	//console.log(end_x, end_y);
	//console.log((start_y - end_y), (start_x - end_x));

		var pieceType = dragged.className;

	//console.log(dragged.className);
	
	//console.log(blackRookCanMove(end_y, end_x, start_y, start_x));

		if(((blackPawnCanMove(end_y, end_x, start_y, start_x) === true) && (pieceType === "pawn blackpiece piece")) ||
			((KnightCanMove(end_y, end_x, start_y, start_x) === true) && (pieceType === "knight blackpiece piece")) ||
			((BishopCanMove(end_y, end_x, start_y, start_x) === true) && (pieceType === "bishop blackpiece piece")) ||
			((RookCanMove(end_y, end_x, start_y, start_x) === true) && (pieceType === "rook blackpiece piece")) ||
			((KingCanMove(end_y, end_x, start_y, start_x) === true) && (pieceType === "king blackpiece piece")) ||
			((QueenCanMove(end_y, end_x, start_y, start_x) === true) && (pieceType === "queen blackpiece piece")))

		{
		//var draggedName = dragged.id;
		//console.log(draggedName);
			if (checkMate !== 2)

				{
					dragged.parentNode.removeChild( dragged );
					event.target.appendChild( dragged );
					hasRed(end_y, end_x);
					oppMove();
					console.log(checkMate);
				}
		
		}

		event.target.style.background = "";

	
	}, false);

}

function oppMove()
{
	var booleanPieceFound = 2;
	var z = Math.floor(Math.random() * 15)
	var v = Math.floor(Math.random() * 15)
	for(var i = z; i < redPiece.length; i++)
	{
		var pc = redPiece[i];
		var pci = pc.getBoundingClientRect();
		var start_x = pci.x;
		var start_y = pci.y;
		var pieceType = pc.className;
		if(booleanPieceFound === 1)
		{
			break;
		}	
		for(var x = v; x < clickLocationsMove.length; x++)
		{
			var sq = clickLocationsMove[x];
			var sqi = sq.getBoundingClientRect();
			var end_x = sqi.x;
			var end_y = sqi.y;

			if(((RedPawnCanMove(end_y, end_x, start_y, start_x) === true) && (pieceType === "pawn redpiece piece")) ||
			((RedKnightCanMove(end_y, end_x, start_y, start_x) === true) && (pieceType === "knight redpiece piece")) ||
			((RedBishopCanMove(end_y, end_x, start_y, start_x) === true) && (pieceType === "bishop redpiece piece")) ||
			((RedRookCanMove(end_y, end_x, start_y, start_x) === true) && (pieceType === "rook redpiece piece")) ||
			((RedKingCanMove(end_y, end_x, start_y, start_x) === true) && (pieceType === "king redpiece piece")) ||
			((RedQueenCanMove(end_y, end_x, start_y, start_x) === true) && (pieceType === "queen redpiece piece")))

			{

				console.log("piece " + (i + 1) + " can move to sqaure " + (x + 1));
				pc.style.color = "blue";
				booleanPieceFound = 1
				if (checkMate !== 2)

				{

					pc.parentNode.removeChild( pc );
					sq.appendChild( pc );
					hasBlack(end_y, end_x);
				}
			
			}

		}
	}

}



function positionAudit() {

	for(var i=0; i < redPiece.length; i++) {
		var rpb = redPiece[i].getBoundingClientRect();
		var boolean = "";
		
		if(rpb.y !== 13 && rpb.y !== 33 && rpb.y !== 53 && rpb.y !== 73) {
	

			//console.log(rpb.x + ",** " + rpb.y + " redpiece " + i);
			boolean = false;
		}
		else {
			//console.log(rpb.x + ", " + rpb.y + " redpiece " + i);
			boolean = true;
		}
	}

	for(var i=0; i < blackPiece.length; i++) {
		var bpb = blackPiece[i].getBoundingClientRect();
		//console.log(bpb.x + ", " + bpb.y + " blackpiece" + i);
	}
	return boolean;
}

//interference check will be needed for queen, bishop, and rook

function RedPawnCanMove(endy, endx, starty, startx) 
{
	///try to center these to 24 nd 24 +/-
	var boolean = "";

	if (((((starty - endy) === -20) && ((startx - endx) === -20))) ///&& (startx != 196)) 
		|| ((((starty - endy) === -20) && ((startx - endx) === 28))) //&& (startx != 188)) 
		|| ((((starty - endy) === -20) && ((startx - endx) === -22))) //&& (startx != 194)) 
		|| ((((starty - endy) === -20) && ((startx - endx) === 26)))) ///&& (startx != 22)))
		{

			if (redInterference(endy, endx) === false) //&& (piecetype.className === "pawn blackpiece piece"))
			{
				boolean = true;
			}
			else
			{
				boolean = false;
			}
		}
		
		//redinterference function goes here
		return boolean;
}


function RedKingCanMove(endy, endx, starty, startx) 
{
	var boolean = "";

	if ( ((((starty - endy) === 28) && (startx - endx) === -20)) ||
	(((starty - endy) === 28) && ((startx - endx) === 28)) ||
	((((starty - endy) === -20) && (startx - endx) === -20)) ||
	((((starty - endy) === -20) && (startx - endx) === 28)) ||
	((((starty - endy) === 28) && (startx - endx) === 4)) ||
	((((starty - endy) === 4) && (startx - endx) === -20)) ||
	((((starty - endy) === 4) && (startx - endx) === 28)) ||
	((((starty - endy) === -20) && (startx - endx) === 4)) ||
	((((starty - endy) === 28) && (startx - endx) === -22)) ||
	(((starty - endy) === 28) && ((startx - endx) === 26)) ||
	((((starty - endy) === -20) && (startx - endx) === -22)) ||
	((((starty - endy) === -20) && (startx - endx) === 26)) ||
	((((starty - endy) === 28) && (startx - endx) === 2)) ||
	((((starty - endy) === 4) && (startx - endx) === -22)) ||
	((((starty - endy) === 4) && (startx - endx) === 26)) ||
	((((starty - endy) === -20) && (startx - endx) === 2)) )
	{

			if (redInterference(endy, endx) === false) 
			{
				boolean = true;
			}
			else
			{
				boolean = false;
			}
	}

		return boolean;	

}


function RedQueenCanMove(endy, endx, starty, startx) 
{
	var boolean = "";

	if ((InterferenceCheckDiagonalRightDown(endy, endx, starty, startx) === false) &&
		(InterferenceCheckDiagonalLeftDown(endy, endx, starty, startx) === false) &&
		(InterferenceCheckDiagonalRightUp(endy, endx, starty, startx) === false) &&
		(InterferenceCheckDiagonalLeftUp(endy, endx, starty, startx) === false) &&
		(InterferenceCheckHorizontalRight(endy, endx, starty, startx) === false) && 
		(InterferenceCheckHorizontalLeft(endy, endx, starty, startx) === false) &&
		(InterferenceCheckVerticalDown(endy, endx, starty, startx) === false) &&
		(InterferenceCheckVerticalUp(endy, endx, starty, startx) === false) &&
		(redInterference(endy, endx) === false))
		{
			boolean = true;
		}
		else
		{
			boolean = false;
		}

		//}

		return boolean;
	
}


function RedKnightCanMove(endy, endx, starty, startx) 
{

	var boolean = "";

	if (((((starty - endy) === 52) && (startx - endx) === -22)) ||
	((((starty - endy) === 52) && (startx - endx) === 26)) ||
	((((starty - endy) === -44) && (startx - endx) === -22)) ||
	((((starty - endy) === -44) && (startx - endx) === 26)) ||
	((((starty - endy) === -20) && (startx - endx) === -46)) ||
	((((starty - endy) === -20) && (startx - endx) === 50)) ||
	((((starty - endy) === 28) && (startx - endx) === 50)) ||
	((((starty - endy) === 28) && (startx - endx) === -46)) ||
	((((starty - endy) === 52) && (startx - endx) === -20)) ||
	((((starty - endy) === 52) && (startx - endx) === 28)) ||
	((((starty - endy) === -44) && (startx - endx) === -20)) ||
	((((starty - endy) === -44) && (startx - endx) === 28)) ||
	((((starty - endy) === -20) && (startx - endx) === -44)) ||
	((((starty - endy) === -20) && (startx - endx) === 52)) ||
	((((starty - endy) === 28) && (startx - endx) === 52)) ||
	((((starty - endy) === 28) && (startx - endx) === -44))) 
	{

			if (redInterference(endy, endx) === false) //&& (piecetype.className === "pawn blackpiece piece"))
			{
				boolean = true;
			}
			else
			{
				boolean = false;
			}
	}

		return boolean;
}


function RedBishopCanMove(endy, endx, starty, startx) 
{
	var boolean = false;
	
	if((moveAngle(endy,starty,endx,startx) === -46) || (moveAngle(endy,starty,endx,startx) === -47) ||
		(moveAngle(endy,starty,endx,startx) === -48) || (moveAngle(endy,starty,endx,startx) === -49) ||
		(moveAngle(endy,starty,endx,startx) === -50) || (moveAngle(endy,starty,endx,startx) === -51) ||
		(moveAngle(endy,starty,endx,startx) === -52) || (moveAngle(endy,starty,endx,startx) === -53) ||
		(moveAngle(endy,starty,endx,startx) === -54) || (moveAngle(endy,starty,endx,startx) === -133) || 
		(moveAngle(endy,starty,endx,startx) === -134) || (moveAngle(endy,starty,endx,startx) === -135) || 
		(moveAngle(endy,starty,endx,startx) === 135) || (moveAngle(endy,starty,endx,startx) === 136) || 
		(moveAngle(endy,starty,endx,startx) === 137) || (moveAngle(endy,starty,endx,startx) === 138) || 
		(moveAngle(endy,starty,endx,startx) === 139) || (moveAngle(endy,starty,endx,startx) === 140) || 
		(moveAngle(endy,starty,endx,startx) === 141) || (moveAngle(endy,starty,endx,startx) === 142) || 
		(moveAngle(endy,starty,endx,startx) === 143) || (moveAngle(endy,starty,endx,startx) === 144) ||
		(moveAngle(endy,starty,endx,startx) === 42) || (moveAngle(endy,starty,endx,startx) === 43) ||
		(moveAngle(endy,starty,endx,startx) === 44) || (moveAngle(endy,starty,endx,startx) === 45))	//consider putting here

		{

			if ((InterferenceCheckDiagonalRightDown(endy, endx, starty, startx) === false) &&
			(InterferenceCheckDiagonalLeftDown(endy, endx, starty, startx) === false) &&
			(InterferenceCheckDiagonalRightUp(endy, endx, starty, startx) === false) &&
			(InterferenceCheckDiagonalLeftUp(endy, endx, starty, startx) === false) &&
			(redInterference(endy, endx) === false)) //&& (piecetype.className === "pawn blackpiece piece"))
			{
				boolean = true;
			}
			else
			{
				boolean = false;
			}
		}

		return boolean;

}

//157 159



function RedRookCanMove(endy, endx, starty, startx) 
{

	boolean = "";

	if((moveAngle(endy,starty,endx,startx) === -90) || (moveAngle(endy,starty,endx,startx) === -91) ||
		(moveAngle(endy,starty,endx,startx) === -92) || (moveAngle(endy,starty,endx,startx) === -93) ||
		(moveAngle(endy,starty,endx,startx) === -94) || (moveAngle(endy,starty,endx,startx) === -95) ||
		(moveAngle(endy,starty,endx,startx) === -96) || (moveAngle(endy,starty,endx,startx) === -97) ||
		(moveAngle(endy,starty,endx,startx) === -98) || (moveAngle(endy,starty,endx,startx) === 92) ||
		(moveAngle(endy,starty,endx,startx) === 93) || (moveAngle(endy,starty,endx,startx) === 94) || 
		(moveAngle(endy,starty,endx,startx) === 95) || (moveAngle(endy,starty,endx,startx) === 96) || 
		(moveAngle(endy,starty,endx,startx) === 97) || (moveAngle(endy,starty,endx,startx) === 98) || 
		(moveAngle(endy,starty,endx,startx) === 99) || (moveAngle(endy,starty,endx,startx) === 100) || 
		(moveAngle(endy,starty,endx,startx) === 101) || (moveAngle(endy,starty,endx,startx) === -171) || 
		(moveAngle(endy,starty,endx,startx) === -172) || (moveAngle(endy,starty,endx,startx) === -173) ||
		(moveAngle(endy,starty,endx,startx) === -174) || (moveAngle(endy,starty,endx,startx) === -175) ||
		(moveAngle(endy,starty,endx,startx) === -176) || (moveAngle(endy,starty,endx,startx) === -177) ||
		(moveAngle(endy,starty,endx,startx) === -178) || (moveAngle(endy,starty,endx,startx) === -179) ||
		(moveAngle(endy,starty,endx,startx) === -1) || (moveAngle(endy,starty,endx,startx) === -2) ||
		(moveAngle(endy,starty,endx,startx) === -3) || (moveAngle(endy,starty,endx,startx) === -4) ||
		(moveAngle(endy,starty,endx,startx) === -5) || (moveAngle(endy,starty,endx,startx) === -6) ||
		(moveAngle(endy,starty,endx,startx) === -7) || (moveAngle(endy,starty,endx,startx) === -8) ||
		(moveAngle(endy,starty,endx,startx) === -9) || (moveAngle(endy,starty,endx,startx) === -10) || 
		(moveAngle(endy,starty,endx,startx) === -11)) 
		{
			if((InterferenceCheckHorizontalRight(endy, endx, starty, startx) === false) && 
			(InterferenceCheckHorizontalLeft(endy, endx, starty, startx) === false) &&
			(InterferenceCheckVerticalDown(endy, endx, starty, startx) === false) &&
			(InterferenceCheckVerticalUp(endy, endx, starty, startx) === false) &&
			(redInterference(endy, endx) === false))
			{
				boolean = true;	
			}
			else
			{
				boolean = false;
			}

		}

		return boolean;
}

function blackPawnCanMove(endy, endx, starty, startx) 
{
	///try to center these to 24 nd 24 +/-
	var boolean = "";

	if (((((starty - endy) === 28) && ((startx - endx) === 28)) && (startx != 196)) 
		|| ((((starty - endy) === 28) && ((startx - endx) === -20)) && (startx != 188)) 
		|| ((((starty - endy) === 28) && ((startx - endx) === 26)) && (startx != 194)) 
		|| ((((starty - endy) === 28) && ((startx - endx) === -22)) && (startx != 22))) 
		{

			if (blackInterference(endy, endx) === false) //&& (piecetype.className === "pawn blackpiece piece"))
			{
				boolean = true;
			}
			else
			{
				boolean = false;
			}
		}

		return boolean;	
}



function KingCanMove(endy, endx, starty, startx) 
{
	var boolean = "";

	if ( ((((starty - endy) === 28) && (startx - endx) === -20)) ||
	(((starty - endy) === 28) && ((startx - endx) === 28)) ||
	((((starty - endy) === -20) && (startx - endx) === -20)) ||
	((((starty - endy) === -20) && (startx - endx) === 28)) ||
	((((starty - endy) === 28) && (startx - endx) === 4)) ||
	((((starty - endy) === 4) && (startx - endx) === -20)) ||
	((((starty - endy) === 4) && (startx - endx) === 28)) ||
	((((starty - endy) === -20) && (startx - endx) === 4)) ||
	((((starty - endy) === 28) && (startx - endx) === -22)) ||
	(((starty - endy) === 28) && ((startx - endx) === 26)) ||
	((((starty - endy) === -20) && (startx - endx) === -22)) ||
	((((starty - endy) === -20) && (startx - endx) === 26)) ||
	((((starty - endy) === 28) && (startx - endx) === 2)) ||
	((((starty - endy) === 4) && (startx - endx) === -22)) ||
	((((starty - endy) === 4) && (startx - endx) === 26)) ||
	((((starty - endy) === -20) && (startx - endx) === 2)) )
	{

			if (blackInterference(endy, endx) === false) //&& (piecetype.className === "pawn blackpiece piece"))
			{
				boolean = true;
			}
			else
			{
				boolean = false;
			}
	}

		return boolean;	

}


function QueenCanMove(endy, endx, starty, startx) 
{
	var boolean = "";

	if ((InterferenceCheckDiagonalRightDown(endy, endx, starty, startx) === false) &&
		(InterferenceCheckDiagonalLeftDown(endy, endx, starty, startx) === false) &&
		(InterferenceCheckDiagonalRightUp(endy, endx, starty, startx) === false) &&
		(InterferenceCheckDiagonalLeftUp(endy, endx, starty, startx) === false) &&
		(InterferenceCheckHorizontalRight(endy, endx, starty, startx) === false) && 
		(InterferenceCheckHorizontalLeft(endy, endx, starty, startx) === false) &&
		(InterferenceCheckVerticalDown(endy, endx, starty, startx) === false) &&
		(InterferenceCheckVerticalUp(endy, endx, starty, startx) === false) &&
		(blackInterference(endy, endx) === false))
		{
			boolean = true;
		}
		else
		{
			boolean = false;
		}

		//}

		return boolean;
	
}


function KnightCanMove(endy, endx, starty, startx) 
{

	var boolean = "";

	if (((((starty - endy) === 52) && (startx - endx) === -22)) ||
	((((starty - endy) === 52) && (startx - endx) === 26)) ||
	((((starty - endy) === -44) && (startx - endx) === -22)) ||
	((((starty - endy) === -44) && (startx - endx) === 26)) ||
	((((starty - endy) === -20) && (startx - endx) === -46)) ||
	((((starty - endy) === -20) && (startx - endx) === 50)) ||
	((((starty - endy) === 28) && (startx - endx) === 50)) ||
	((((starty - endy) === 28) && (startx - endx) === -46)) ||
	((((starty - endy) === 52) && (startx - endx) === -20)) ||
	((((starty - endy) === 52) && (startx - endx) === 28)) ||
	((((starty - endy) === -44) && (startx - endx) === -20)) ||
	((((starty - endy) === -44) && (startx - endx) === 28)) ||
	((((starty - endy) === -20) && (startx - endx) === -44)) ||
	((((starty - endy) === -20) && (startx - endx) === 52)) ||
	((((starty - endy) === 28) && (startx - endx) === 52)) ||
	((((starty - endy) === 28) && (startx - endx) === -44))) 
	{

			if (blackInterference(endy, endx) === false) //&& (piecetype.className === "pawn blackpiece piece"))
			{
				boolean = true;
			}
			else
			{
				boolean = false;
			}
	}

		return boolean;
}


function BishopCanMove(endy, endx, starty, startx) 
{
	var boolean = false;
	
	if((moveAngle(endy,starty,endx,startx) === -46) || (moveAngle(endy,starty,endx,startx) === -47) ||
		(moveAngle(endy,starty,endx,startx) === -48) || (moveAngle(endy,starty,endx,startx) === -49) ||
		(moveAngle(endy,starty,endx,startx) === -50) || (moveAngle(endy,starty,endx,startx) === -51) ||
		(moveAngle(endy,starty,endx,startx) === -52) || (moveAngle(endy,starty,endx,startx) === -53) ||
		(moveAngle(endy,starty,endx,startx) === -54) || (moveAngle(endy,starty,endx,startx) === -133) || 
		(moveAngle(endy,starty,endx,startx) === -134) || (moveAngle(endy,starty,endx,startx) === -135) || 
		(moveAngle(endy,starty,endx,startx) === 135) || (moveAngle(endy,starty,endx,startx) === 136) || 
		(moveAngle(endy,starty,endx,startx) === 137) || (moveAngle(endy,starty,endx,startx) === 138) || 
		(moveAngle(endy,starty,endx,startx) === 139) || (moveAngle(endy,starty,endx,startx) === 140) || 
		(moveAngle(endy,starty,endx,startx) === 141) || (moveAngle(endy,starty,endx,startx) === 142) || 
		(moveAngle(endy,starty,endx,startx) === 143) || (moveAngle(endy,starty,endx,startx) === 144) ||
		(moveAngle(endy,starty,endx,startx) === 42) || (moveAngle(endy,starty,endx,startx) === 43) ||
		(moveAngle(endy,starty,endx,startx) === 44) || (moveAngle(endy,starty,endx,startx) === 45))	

		{

			if ((InterferenceCheckDiagonalRightDown(endy, endx, starty, startx) === false) &&
			(InterferenceCheckDiagonalLeftDown(endy, endx, starty, startx) === false) &&
			(InterferenceCheckDiagonalRightUp(endy, endx, starty, startx) === false) &&
			(InterferenceCheckDiagonalLeftUp(endy, endx, starty, startx) === false) &&
			(blackInterference(endy, endx) === false)) 
			{
				boolean = true;
			}
			else
			{
				boolean = false;
			}
		}

		return boolean;

}



function RookCanMove(endy, endx, starty, startx) 
{

	if((moveAngle(endy,starty,endx,startx) === -90) || (moveAngle(endy,starty,endx,startx) === -91) ||
		(moveAngle(endy,starty,endx,startx) === -92) || (moveAngle(endy,starty,endx,startx) === -93) ||
		(moveAngle(endy,starty,endx,startx) === -94) || (moveAngle(endy,starty,endx,startx) === -95) ||
		(moveAngle(endy,starty,endx,startx) === -96) || (moveAngle(endy,starty,endx,startx) === -97) ||
		(moveAngle(endy,starty,endx,startx) === -98) || (moveAngle(endy,starty,endx,startx) === 92) ||
		(moveAngle(endy,starty,endx,startx) === 93) || (moveAngle(endy,starty,endx,startx) === 94) || 
		(moveAngle(endy,starty,endx,startx) === 95) || (moveAngle(endy,starty,endx,startx) === 96) || 
		(moveAngle(endy,starty,endx,startx) === 97) || (moveAngle(endy,starty,endx,startx) === 98) || 
		(moveAngle(endy,starty,endx,startx) === 99) || (moveAngle(endy,starty,endx,startx) === 100) || 
		(moveAngle(endy,starty,endx,startx) === 101) || (moveAngle(endy,starty,endx,startx) === -171) || 
		(moveAngle(endy,starty,endx,startx) === -172) || (moveAngle(endy,starty,endx,startx) === -173) ||
		(moveAngle(endy,starty,endx,startx) === -174) || (moveAngle(endy,starty,endx,startx) === -175) ||
		(moveAngle(endy,starty,endx,startx) === -176) || (moveAngle(endy,starty,endx,startx) === -177) ||
		(moveAngle(endy,starty,endx,startx) === -178) || (moveAngle(endy,starty,endx,startx) === -179) ||
		(moveAngle(endy,starty,endx,startx) === -1) || (moveAngle(endy,starty,endx,startx) === -2) ||
		(moveAngle(endy,starty,endx,startx) === -3) || (moveAngle(endy,starty,endx,startx) === -4) ||
		(moveAngle(endy,starty,endx,startx) === -5) || (moveAngle(endy,starty,endx,startx) === -6) ||
		(moveAngle(endy,starty,endx,startx) === -7) || (moveAngle(endy,starty,endx,startx) === -8) ||
		(moveAngle(endy,starty,endx,startx) === -9) || (moveAngle(endy,starty,endx,startx) === -10) || 
		(moveAngle(endy,starty,endx,startx) === -11)) 
		{
			if((InterferenceCheckHorizontalRight(endy, endx, starty, startx) === false) && 
			(InterferenceCheckHorizontalLeft(endy, endx, starty, startx) === false) &&
			(InterferenceCheckVerticalDown(endy, endx, starty, startx) === false) &&
			(InterferenceCheckVerticalUp(endy, endx, starty, startx) === false) &&
			(blackInterference(endy, endx) === false))
			{
				return true;	
			}
			else
			{
				return false;
			}

		}
}


function InterferenceCheckDiagonalRightUp(endy, endx, starty, startx) 
{

for(var i = 0; i < pieces.length; i++) 
	{
		var pc = pieces[i].getBoundingClientRect();
		//var pc = p.getBoundingClientRect();
		var pcX = pc.x;
		var pcY = pc.y;
		//console.log(moveAngle(endy, pcY, endx, pcX));
		var boolean = "";
		//console.log(pc);
		if (((moveAngle(endy,pcY,endx,pcX) === -46) || (moveAngle(endy,pcY,endx,pcX) === -47) || 
			(moveAngle(endy,pcY,endx,pcX) === -48) || (moveAngle(endy,pcY,endx,pcX) === -49) || 
			(moveAngle(endy,pcY,endx,pcX) === -50) || (moveAngle(endy,pcY,endx,pcX) === -51) || 
			(moveAngle(endy,pcY,endx,pcX) === -52) || (moveAngle(endy,pcY,endx,pcX) === -53) || 
			(moveAngle(endy,pcY,endx,pcX) === -54)) && ((pcY < starty) && (pcY > endy))) 
		{
			boolean = true;
			break;
		}
		else
		{
			boolean = false;
		}
	}
	return boolean;

}

function InterferenceCheckDiagonalLeftUp(endy, endx, starty, startx) 
{
	for(var i = 0; i < pieces.length; i++) 
	{
		var pc = pieces[i].getBoundingClientRect();
		//var pc = p.getBoundingClientRect();
		var pcX = pc.x;
		var pcY = pc.y;
		//console.log(moveAngle(endy, pcY, endx, pcX));
		var boolean = "";
		//console.log(pc);
		if (((moveAngle(endy,pcY,endx,pcX) === -133) || (moveAngle(endy,pcY,endx,pcX) === -134) ||		
			(moveAngle(endy,pcY,endx,pcX) === -135)) && ((pcY < starty) && (pcY > endy))) 
		{
			boolean = true;
			break;
		}
		else
		{
			boolean = false;
		}
	}
	return boolean;
}

function InterferenceCheckDiagonalLeftDown(endy, endx, starty, startx) 
{

	for(var i = 0; i < pieces.length; i++) 
	{
		var pc = pieces[i].getBoundingClientRect();
		//var pc = p.getBoundingClientRect();
		var pcX = pc.x;
		var pcY = pc.y;
		//console.log(moveAngle(endy, pcY, endx, pcX));
		var boolean = "";
		//console.log(pc);
		if (((moveAngle(endy,pcY,endx,pcX) === 135) || (moveAngle(endy,pcY,endx,pcX) === 136) || 
			(moveAngle(endy,pcY,endx,pcX) === 137) || (moveAngle(endy,pcY,endx,pcX) === 138) || 
			(moveAngle(endy,pcY,endx,pcX) === 139) || (moveAngle(endy,pcY,endx,pcX) === 140) || 
			(moveAngle(endy,pcY,endx,pcX) === 141) || (moveAngle(endy,pcY,endx,pcX) === 142) || 
			(moveAngle(endy,pcY,endx,pcX) === 143) || (moveAngle(endy,pcY,endx,pcX) === 144))
			&& ((pcY > starty) && (pcY < endy))) 
		{
			boolean = true;
			break;
		}
		else
		{
			boolean = false;
		}
	}
	return boolean;
		
}

function InterferenceCheckDiagonalRightDown(endy, endx, starty, startx) 
{
	
	for(var i = 0; i < pieces.length; i++) 
	{
		var pc = pieces[i].getBoundingClientRect();
		//var pc = p.getBoundingClientRect();
		var pcX = pc.x;
		var pcY = pc.y;
		//console.log(moveAngle(endy, pcY, endx, pcX));
		var boolean = "";
		//console.log(pc);
		if (((moveAngle(endy,pcY,endx,pcX) === 42) || (moveAngle(endy,pcY,endx,pcX) === 43) ||
			(moveAngle(endy,pcY,endx,pcX) === 44) || (moveAngle(endy,pcY,endx,pcX) === 45)) 
			&& ((pcY > starty) && (pcY < endy))) 
		{
			boolean = true;
			break;
		}
		else
		{
			boolean = false;
		}
	}
	return boolean;

	
}

function InterferenceCheckVerticalUp(endy, endx, starty, startx) 
{

	for(var i = 0; i < pieces.length; i++) 
	{
		var pc = pieces[i].getBoundingClientRect();
		//var pc = p.getBoundingClientRect();
		var pcX = pc.x;
		var pcY = pc.y;
		//console.log(moveAngle(endy, pcY, endx, pcX));
		var boolean = "";
		//console.log(pc);
		if (((moveAngle(endy,pcY,endx,pcX) === -90) || (moveAngle(endy,pcY,endx,pcX) === -91) ||
			(moveAngle(endy,pcY,endx,pcX) === -92) || (moveAngle(endy,pcY,endx,pcX) === -93) ||
			(moveAngle(endy,pcY,endx,pcX) === -94) || (moveAngle(endy,pcY,endx,pcX) === -95) ||
			(moveAngle(endy,pcY,endx,pcX) === -96) || (moveAngle(endy,pcY,endx,pcX) === -97) ||
			(moveAngle(endy,pcY,endx,pcX) === -98)) && ((pcY < starty) && (pcY > endy))) 
		{
			boolean = true;
			break;
		}
		else
		{
			boolean = false;
		}
	}
	return boolean;
		

}

function InterferenceCheckVerticalDown(endy, endx, starty, startx) 
{

	for(var i = 0; i < pieces.length; i++) 
	{
		var pc = pieces[i].getBoundingClientRect();
		//var pc = p.getBoundingClientRect();
		var pcX = pc.x;
		var pcY = pc.y;
		//console.log(moveAngle(endy, pcY, endx, pcX));
		var boolean = "";
		//console.log(pc);
		if (((moveAngle(endy,pcY,endx,pcX) === 92) || (moveAngle(endy,pcY,endx,pcX) === 93) || 
			(moveAngle(endy,pcY,endx,pcX) === 94) || (moveAngle(endy,pcY,endx,pcX) === 95) || 
			(moveAngle(endy,pcY,endx,pcX) === 96) || (moveAngle(endy,pcY,endx,pcX) === 97) || 
			(moveAngle(endy,pcY,endx,pcX) === 98) || (moveAngle(endy,pcY,endx,pcX) === 99) || 
			(moveAngle(endy,pcY,endx,pcX) === 100) || (moveAngle(endy,pcY,endx,pcX) === 101)) && 
			((pcY > starty) && (pcY < endy))) 
		{
			boolean = true;
			break;
		}
		else
		{
			boolean = false;
		}
	}
	return boolean;

}

function InterferenceCheckHorizontalLeft(endy, endx, starty, startx) 
{
	for(var i = 0; i < pieces.length; i++) 
	{
		var pc = pieces[i].getBoundingClientRect();
		//var pc = p.getBoundingClientRect();
		var pcX = pc.x;
		var pcY = pc.y;
		//console.log(moveAngle(endy, pcY, endx, pcX));
		var boolean = "";
		//console.log(pc);
		if (((moveAngle(endy,pcY,endx,pcX) === -171) || (moveAngle(endy,pcY,endx,pcX) === -172) || 
			(moveAngle(endy,pcY,endx,pcX) === -173) || (moveAngle(endy,pcY,endx,pcX) === -174) || 
			(moveAngle(endy,pcY,endx,pcX) === -175) || (moveAngle(endy,pcY,endx,pcX) === -176) || 
			(moveAngle(endy,pcY,endx,pcX) === -177) || (moveAngle(endy,pcY,endx,pcX) === -178) || 
			(moveAngle(endy,pcY,endx,pcX) === -179)) && ((pcX < startx) && (pcX > endx))) 
		{
			boolean = true;
			break;
		}
		else
		{
			boolean = false;
		}
	}
	return boolean;
}

function InterferenceCheckHorizontalRight(endy, endx, starty, startx) 
{
	for(var i = 0; i < pieces.length; i++) 
	{
		var pc = pieces[i].getBoundingClientRect();
		//var pc = p.getBoundingClientRect();
		var pcX = pc.x;
		var pcY = pc.y;
		//console.log(moveAngle(endy, pcY, endx, pcX));
		var boolean = "";
		//console.log(pc);
		if (((moveAngle(endy, pcY, endx, pcX) === -1) || (moveAngle(endy, pcY, endx, pcX) === -2) 
			 || (moveAngle(endy, pcY, endx, pcX) === -3) || (moveAngle(endy, pcY, endx, pcX) === -4) 
			 || (moveAngle(endy, pcY, endx, pcX) === -5) || (moveAngle(endy, pcY, endx, pcX) === -6) 
			 || (moveAngle(endy, pcY, endx, pcX) === -7) || (moveAngle(endy, pcY, endx, pcX) === -8) 
			 || (moveAngle(endy, pcY, endx, pcX) === -9)  || (moveAngle(endy, pcY, endx, pcX) === -10) 
			 || (moveAngle(endy, pcY, endx, pcX) === -11)) && ((pcX > startx) && (pcX < endx))) 
		{
			boolean = true;
			break;
		}
		else
		{
			boolean = false;
		}
	}
	return boolean;
}



function moveAngle(y2, y1, x2, x1) {
	var moveAngleNR = Math.atan2((y2 - y1), (x2 - x1)) * (180/Math.PI);
	var moveAngle = Math.round(moveAngleNR);
	return moveAngle;
}


function blackInterference(endy, endx) 
{

	for(var i = 0; i < blackPiece.length; i++) 
	{
		var pc = blackPiece[i].getBoundingClientRect();
		//var pci = pc
		var pcx = pc.x;
		var pcy = pc.y;
		var boolean = "";

		//console.log(pcx, pcy);


		if(((endy - pcy === -2) || (endy - pcy === 2) || (endy - pcy === 0) || (endy - pcy === -4) || (endy - pcy === 4)) && 
			((endx - pcx === 0) || (endx - pcx === -4) || (endx - pcx === 4) || (endx - pcx === -2) || (endx - pcx === 2)))
		{
			boolean = true;
			break;
		}
		else
		{
			boolean = false;
		}
	}

	return boolean;

}


function redInterference(endy, endx) 
{

	for(var i = 0; i < redPiece.length; i++) 
	{
		var pc = redPiece[i].getBoundingClientRect();
		//var pci = pc
		var pcx = pc.x;
		var pcy = pc.y;
		var boolean = "";

		if(((endy - pcy === -5) || (endy - pcy === -1) || (endy - pcy === 1) || (endy - pcy === -2) || (endy - pcy === 2) || (endy - pcy === 0) || (endy - pcy === -4) || (endy - pcy === 4) || (endy - pcy === 5) || (endy - pcy === 3) || (endy - pcy === -3)) && 
			((endx - pcx === -5) || (endx - pcx === -1) || (endx - pcx === 1) || (endx - pcx === 0) || (endx - pcx === -4) || (endx - pcx === 4) || (endx - pcx === -2) || (endx - pcx === 2) || (endx - pcx === 5) || (endx - pcx === 3) || (endx - pcx === -3)))
		{
			boolean = true;
			break;
		}
		else
		{
			boolean = false;
		}
	}

	return boolean;

}

function hasRed(endy, endx) 
{

	for(var i = 0; i < redPiece.length; i++) 
	{
		var pc = redPiece[i].getBoundingClientRect();
		//var pci = pc
		var pcx = pc.x;
		var pcy = pc.y;
		var parent = redPiece[i].parentNode;
		//console.log(parent);
		var boolean = "";
		//console.log(pcx, pcy);
		if(((endy - pcy === -2) || (endy - pcy === 2) || (endy - pcy === 0) || (endy - pcy === -4) || (endy - pcy === 4)) && 
			((endx - pcx === 0) || (endx - pcx === -4) || (endx - pcx === 4) || (endx - pcx === -2) || (endx - pcx === 2)))
		{
			console.log(hasKing(redPiece[i]));	
			parent.removeChild(redPiece[i]);
			checkedPieceInfoRed(redPiece[i]);
			break;
		}

	}

}

function hasBlack(endy, endx) 
{

	for(var i = 0; i < blackPiece.length; i++) 
	{
		var pc = blackPiece[i].getBoundingClientRect();
		var p = blackPiece[i];
		var pcx = pc.x;
		var pcy = pc.y;
		var parent = blackPiece[i].parentNode;
		//console.log(parent);
		var boolean = "";

		//console.log(pcx, pcy);
		if(((endy - pcy === -2) || (endy - pcy === 2) || (endy - pcy === 0) || (endy - pcy === -4) || (endy - pcy === 4)) && 
			((endx - pcx === 0) || (endx - pcx === -4) || (endx - pcx === 4) || (endx - pcx === -2) || (endx - pcx === 2)))
		{
			
			console.log(hasKing(blackPiece[i]));
			parent.removeChild(blackPiece[i]);
			checkedPieceInfoBlack(blackPiece[i]);
			break;
		}

	}

}

function hasKing(piece)
{
	var boolean = "";

	if((piece.className === "king blackpiece piece") || (piece.className === "king redpiece piece"))
	{
		boolean = true;
		checkMate = 2;
	}
	else
	{
		boolean = false;
	}

	return boolean;
}

function checkedPieceInfoRed(piece)
{
		for(var z = 0; z < redCheckedInfo.length; z++)
			{
				if(redCheckedInfo[z].textContent === "")
				{
					if(piece.className === "pawn redpiece piece")
					{
						redCheckedInfo[z].textContent = "P";
					}
					else if(piece.className === "rook redpiece piece")
					{
						redCheckedInfo[z].textContent = "R";
					}
					else if(piece.className === "knight redpiece piece")
					{
						redCheckedInfo[z].textContent = "K";
					}	
					else if(piece.className === "bishop redpiece piece")
					{
						redCheckedInfo[z].textContent = "B";
					}
					else if(piece.className === "queen redpiece piece")
					{
						redCheckedInfo[z].textContent = "Q";
					}
					else
					{
						redCheckedInfo[z].textContent = "+";
					}				
					break;
				}

			}
}

function checkedPieceInfoBlack(piece)
{
		for(var z = 0; z < blackCheckedInfo.length; z++)
			{
				if(blackCheckedInfo[z].textContent === "")
				{
					if(piece.className === "pawn blackpiece piece")
					{
						blackCheckedInfo[z].textContent = "P";
					}
					else if(piece.className === "rook blackpiece piece")
					{
						blackCheckedInfo[z].textContent = "R";
					}
					else if(piece.className === "knight blackpiece piece")
					{
						blackCheckedInfo[z].textContent = "K";
					}	
					else if(piece.className === "bishop blackpiece piece")
					{
						blackCheckedInfo[z].textContent = "B";
					}
					else if(piece.className === "queen blackpiece piece")
					{
						blackCheckedInfo[z].textContent = "Q";
					}
					else
					{
						blackCheckedInfo[z].textContent = "+";
					}				
					break;
				}

			}
}

