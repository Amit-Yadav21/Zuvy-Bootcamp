// ============================= searching any data here ?
const data = [
	{
		"Employee_ID": 1,
		"Name": "amit ok",
		"Email": "amitok@gmail.com",
		"Address": "amit ok nagar, mohla gali, machhi market",
		"Phone_Number": "1234567890"
	},
	{
		"Employee_ID": 2,
		"Name": "amit kumar",
		"Email": "amitk@gmail.com",
		"Address": "amit kumar nagar, mohla gali, machhi market",
		"Phone_Number": "1234567891"
	},
	{
		"Employee_ID": 3,
		"Name": "yadav",
		"Email": "yadav@gmail.com",
		"Address": "yadav nagar, mohla gali, machhi market",
		"Phone_Number": "1234567892"
	},
	{
		"Employee_ID": 4,
		"Name": "papa",
		"Email": "papa@gmail.com",
		"Address": "papa nagar, mohla gali, machhi market",
		"Phone_Number": "9651025253"
	}
];

const input = require('readline-sync')
const num = input.question('Enter your number -:')
const searchTerm = num; // The term you want to search for
// // console.log('what is serach :-',searchTerm);

const searchData = data.filter((item) => {
	const name = item.Name.toLowerCase();
	const email = item.Email.toLowerCase();
	const address = item.Address.toLowerCase();
	const phone = item.Phone_Number;

	return (
		name.includes(searchTerm.toLowerCase()) ||
		email.includes(searchTerm.toLowerCase()) ||
		address.includes(searchTerm.toLowerCase()) ||
		phone.includes(searchTerm)
	);
});
// console.log(searchData);