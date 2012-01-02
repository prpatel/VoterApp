exports.fetchVoteData = function(url, callback) {
	//mock data
	setTimeout(function() {
		var results = {"Chicken":8,"Duck":1,"Fish":6,"Vegetarian":9};
		callback.call(this,results);
	},2000);
	
	/*
	var jsonData;	
	var xhr = Titanium.Network.createHTTPClient();
	xhr.onload = function()
	{
		jsonData = JSON.parse(this.responseText);
		Ti.API.log("DEBUG",jsonData);
		callback.call(this,jsonData);
	};
	xhr.onerror = function(e)
	{
		alert('Unable to post to server:'+e.error);
	};
	xhr.open("POST","http://localhost:3000/lab/tally/all.json");
	xhr.send();	
	*/
};

exports.submitData = function (radioSelected) {
	
	var jsonData = {vote : {username: 'Joe Bloggs', votedItem: radioSelected}};
	
	var xhr = Titanium.Network.createHTTPClient();
	xhr.onload = function()
	{
		alert('POSTed to server with response:'+this.responseText);
	};
	xhr.onerror = function(e)
	{
		alert('Unable to post to server:'+e.error);
	};
	xhr.open("POST","http://localhost:3000/lab/ballot/all.json");
	xhr.setRequestHeader("Content-Type","application/json; charset=utf-8");
	xhr.send(JSON.stringify(jsonData));	
}

exports.authenticate = function (username, password) {
	Ti.App.fireEvent('app:login:success', {username: username, verified: 1});
	
	// code here to authenticate to real server
}
