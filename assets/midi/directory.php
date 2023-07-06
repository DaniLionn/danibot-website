$path    = '/tmp';
$files = scandir($path);


$files = array_diff(scandir($path), array('.', '..'));

echo $files
