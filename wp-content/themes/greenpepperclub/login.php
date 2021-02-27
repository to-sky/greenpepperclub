<?php  
/** 
 * Template Name: login page 
 */  
 get_header();   
   
   
if($_POST) 
{  
   
    global $wpdb;  
   
    //We shall SQL escape all inputs  
    $username = $wpdb->escape($_REQUEST['username']);  
    $password = $wpdb->escape($_REQUEST['password']);  
    $remember = $wpdb->escape($_REQUEST['rememberme']);  
   
    if($remember) $remember = "true";  
    else $remember = "false";  
   
    $login_data = array();  
    $login_data['user_login'] = $username;  
    $login_data['user_password'] = $password;  
    $login_data['remember'] = $remember;  
   
    $user_verify = wp_signon( $login_data, true );   
   
   //print_r($user_verify);
   
   //die;
   
    if ( is_wp_error($user_verify) )   
    {  
        echo "Invalid login details";  
       // Note, I have created a page called "Error" that is a child of the login page to handle errors. This can be anything, but it seemed a good way to me to handle errors.  
     } else
    {    
       echo "<script type='text/javascript'>window.location.href='". home_url() ."'</script>";  
       exit();  
     }  
   
} else 
{  
   
    // No login details entered - you should probably add some more user feedback here, but this does the bare minimum  
   
    //echo "Invalid login details";  
   
}  
 ?>  
<section id="primary" class="content-area col-sm-12">
		<main id="main" class="site-main" role="main">
        <div class="container">
            <div class="row">  
                <div class="col col-md-4 col-12 text-center offset-md-4 loginCol food-padding20 food-mt40 food-mb40"><h1>LOGIN</h1>
                    
                        <form id="login1" name="form" action="<?php echo site_url(); ?>/login/" method="post">  
                            <input class="form-control" id="username" type="text" placeholder="Username" name="username"><br>  
                            <input class="form-control" id="password" type="password" placeholder="Password" name="password">  
                            <br>
                            <input class="btn btn-primary btn-block" id="submit" type="submit" name="submit" value="Submit">  
                        </form>
                    
                </div>
            </div>
        </div>
    </main>
</section>
<?php get_footer(); ?> 