var arrCapFieldId = [];
var bCapCaseSensitive = false;
function scapchk(jfldcls,capfieldid,bDocWrite) {
	if (jfldcls == null)
		jfldcls = "input-medium";
	if (bDocWrite == null)
		bDocWrite = true;
	arrCapFieldId[ capfieldid ] = (Math.floor(Math.random()*50))+1;
	cword =
	["927e2a8353c80bdfa2b94cf859b1dbe9", "e80f3af612edeac74c71f8f866331b56", "7d2777915565f2142f424f39bb548d65", 
	 "e1fb03a71beffe63841cd36a42132883", "87c0813f665cf748d76d4bfb80faebeb", "37edf23535a6b391965be73e895d69d1", 
	 "d4630eac40f44571d9a19e137a7faf8f", "7194a4a6335276abdfddabfd4a1da923", "ac7364e0382b5bc8b01926bfb6bba726", 
	 "830fc2c3ffc5958660c037bb3d7dd0ef", "3771d8cb00143838706017be7c5b0f3b", "db075e55f357bb0d96b29657df882d1a", 
	 "7730ec989c23ff22e52c4ad71d1fd346", "1ba4b8a09cd46a875a07ff8cc0635530", "ec058ac9fd4abd9ae66923a8ecfd196a", 
	 "e59e2f2b856a6ba2aa04ac84033b688d", "5f4987355dbf04ab53b3b89b50452da8", "d754dfaa484be80f270b4fa4f3137808", 
	 "7b3b48eb940ad0aa3977e83f4009aa6b", "125da6c2d99f1638d75e4647f8690ae7", "a73970f85f24de928146eff908827f12", 
	 "9d51c051ad250a48116e9c181c9a92d6", "4395e7b32e47922c3416771f537c2eb8", "69c3b8d934adfb61876e0743562ae130", 
	 "09b276e5695724cdca878f63ebcd8649", "b26441221c02979bc55f37a9c3aaf7e1", "da9c6002205ab676caaa949ef2aedee5", 
	 "11f60484645578fd1b4fa9992edb16e7", "f477537129e724d4d36fde2e9aeb268b", "e78315aac50b1ae94e723e155a6a58bf", 
	 "5d5f8232f9bd8a7dc494094d3c938a33", "4cd8717be3d5bb3a2313f7b1e6b6ce1e", "106a6c241b8797f52e1e77317b96a201", 
	 "699c21718deb7cc631a98d91faf057e9", "cb5885a91ea63c47f13e6bed92ac7d26", "558b587f90a964a5f9e0f21bce55b89c", 
	 "4e0f17f03f5b5438f740ee353b855695", "33ba0f8e7f3777e55351092e508bfbfc", "892a9944cf14665375630c06a1902152", 
	 "d20ea369580b9164383f283d1af58c1b", "b8061315ce0552d3518e179a1c37fd39", "10468e6b8d0d34d03e80f639156f3de9", 
	 "fe5e48a9471aa966291a5415bf3ca58f", "31f635bfd2171f94d208429a1f806587", "1e69a87db75c45a1158e52fffae63372", 
	 "b386da70fcf4a2a9511b16c098837c7e", "e0f4b7f1b867c32c5cf2d7d684ed4158", "13a9efd68b237406a69a056e57b9627a", 
	 "5b86005a34fa6ce2686cf2dac5be15bc", "2a6069695b33a49b598a15ce693087a6"];
	outHTML = "<input type=\"text\" id=\"" + capfieldid + "\" name=\"" + capfieldid + "\" class=\"" + jfldcls + " input-medium\"><br>" +
	          "<img style=\"margin-top:4px\" src=\"" + encodeURI("_scripts/captcha/pic647dir/") + parseInt( arrCapFieldId[ capfieldid ] ) + ".jpg\" width=\"160\" height=\"40\" alt=\"\">";
	if (bDocWrite)
		document.write( outHTML );
	else
		return outHTML;
}
function capchk(capfieldid, bShowAlert) {
	if (bShowAlert == null)
		bShowAlert = true;
  var capfieldval = document.getElementById(capfieldid).value;		
	if( !bCapCaseSensitive )
	  capfieldval = capfieldval.toLowerCase();
	if (hex_md5(capfieldval)==cword[arrCapFieldId[ capfieldid ]-1])
		return true;
	else {
		if (bShowAlert) {
			alert("You have mistyped the verification code, please try again by typing the code as it is shown");
			document.getElementById(capfieldid).focus();
		}
		return false;
	}
}
