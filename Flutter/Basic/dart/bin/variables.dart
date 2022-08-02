void main() {
  int num1 = 2;
  double num2 = 2.5;
  bool isTrue = true;

  print((num1 + num2) is int);
  print((num1 + num2).runtimeType);

  String str = 'hello';

  // String interpolation
  print('The type of $str is String? ${str is String}');

  var username;
  username = 'hello me';
  final String fullname = 'Jeff';

  const int age = 75;

  //  Null safety

  int? birthDate = 25;

  String? answer;
  
}
