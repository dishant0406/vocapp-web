type WaitlistEmailDetails = {
  confirmWaitlistUrl: string;
};

export function getWaitlistEmailHtml(details: WaitlistEmailDetails): string {
  const { confirmWaitlistUrl } = details;

  return `<!--
* This email was built using Tabular.
* For more information, visit https://tabular.email
-->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
<head>
<title></title>
<meta charset="UTF-8" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<!--[if !mso]>-->
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<!--<![endif]-->
<meta name="x-apple-disable-message-reformatting" content="" />
<meta content="target-densitydpi=device-dpi" name="viewport" />
<meta content="true" name="HandheldFriendly" />
<meta content="width=device-width" name="viewport" />
<meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no" />
<style type="text/css">
table {
border-collapse: separate;
table-layout: fixed;
mso-table-lspace: 0pt;
mso-table-rspace: 0pt
}
table td {
border-collapse: collapse
}
.ExternalClass {
width: 100%
}
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
line-height: 100%
}
body, a, li, p, h1, h2, h3 {
-ms-text-size-adjust: 100%;
-webkit-text-size-adjust: 100%;
}
html {
-webkit-text-size-adjust: none !important
}
body, #innerTable {
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale
}
#innerTable img+div {
display: none;
display: none !important
}
img {
Margin: 0;
padding: 0;
-ms-interpolation-mode: bicubic
}
h1, h2, h3, p, a {
line-height: inherit;
overflow-wrap: normal;
white-space: normal;
word-break: break-word
}
a {
text-decoration: none
}
h1, h2, h3, p {
min-width: 100%!important;
width: 100%!important;
max-width: 100%!important;
display: inline-block!important;
border: 0;
padding: 0;
margin: 0
}
a[x-apple-data-detectors] {
color: inherit !important;
text-decoration: none !important;
font-size: inherit !important;
font-family: inherit !important;
font-weight: inherit !important;
line-height: inherit !important
}
u + #body a {
color: inherit;
text-decoration: none;
font-size: inherit;
font-family: inherit;
font-weight: inherit;
line-height: inherit;
}
a[href^="mailto"],
a[href^="tel"],
a[href^="sms"] {
color: inherit;
text-decoration: none
}
</style>
<style type="text/css">
@media (min-width: 481px) {
.hd { display: none!important }
}
</style>
<style type="text/css">
@media (max-width: 480px) {
.hm { display: none!important }
}
</style>
<style type="text/css">
@media (max-width: 480px) {
.t5,.t9{vertical-align:middle!important}.t50,.t60{padding-left:30px!important;padding-right:30px!important}.t10{text-align:center!important}.t2{display:revert!important}.t5{width:57px!important}.t9{width:600px!important}.t40,.t42{max-width:420px!important}
}
</style>
<!--[if !mso]>-->
<link href="https://fonts.googleapis.com/css2?family=Host+Grotesk:wght@400;800&amp;family=Roboto:wght@400&amp;family=Inter+Tight:wght@400&amp;family=Inter:wght@600&amp;display=swap" rel="stylesheet" type="text/css" />
<!--<![endif]-->
<!--[if mso]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->
</head>
<body id="body" class="t66" style="min-width:100%;Margin:0px;padding:0px;background-color:#F0EFE9;"><div class="t65" style="background-color:#F0EFE9;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center"><tr><td class="t64" style="font-size:0;line-height:0;mso-line-height-rule:exactly;background-color:#F0EFE9;" valign="top" align="center">
<!--[if mso]>
<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false">
<v:fill color="#F0EFE9"/>
</v:background>
<![endif]-->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" align="center" id="innerTable"><tr><td align="center">
<table class="t53" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t52" style="width:600px;">
<table class="t51" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t50" style="background-color:#152A02;padding:40px 60px 0 60px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="center">
<table class="t17" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="480" class="t16" style="width:600px;">
<table class="t15" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t14" style="border-bottom:1px solid #4D593E;padding:10px 0 10px 0;"><div class="t13" style="width:100%;text-align:center;"><div class="t12" style="display:inline-block;"><table class="t11" role="presentation" cellpadding="0" cellspacing="0" align="center" valign="middle">
<tr class="t10"><td></td><td class="t5" width="44.14219" valign="middle">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t3" style="width:100%;"><tr><td class="t1"><div style="font-size:0px;"><img class="t0" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="34.14219474497682" height="34.14219474497682" alt="" src="https://9d4238a9-e745-4371-8ef6-9c216ffbf26d.b-cdn.net/e/5ff66b56-2df1-437f-9740-d3f9b1be9ebe/037d8e38-09b5-4add-9dcd-9f3b03912eeb.png"/></div></td><td class="t2" style="width:10px;" width="10"></td></tr></table>
<div class="t4" style="mso-line-height-rule:exactly;mso-line-height-alt:1px;line-height:1px;font-size:1px;display:block;">&nbsp;&nbsp;</div>
</td><td class="t9" width="435.85781" valign="middle">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="t8" style="width:100%;"><tr><td class="t7"><p class="t6" style="margin:0;Margin:0;font-family:Roboto,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:22px;font-weight:400;font-style:normal;font-size:13px;text-decoration:none;text-transform:none;direction:ltr;color:#FFFFFF;text-align:right;mso-line-height-rule:exactly;mso-text-raise:3px;">VOCAPP</p></td></tr></table>
</td>
<td></td></tr>
</table></div></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t18" style="mso-line-height-rule:exactly;mso-line-height-alt:52px;line-height:52px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t24" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="480" class="t23" style="width:600px;">
<table class="t22" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t21"><p class="t20" style="margin:10px;Margin:10px;font-family:Host Grotesk,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:18px;font-weight:800;font-style:normal;font-size:13px;text-decoration:none;text-transform:uppercase;letter-spacing:2px;direction:ltr;color:#64F278;text-align:left;mso-line-height-rule:exactly;mso-text-raise:2px;">Waitlist confirmation<span class="t19" style="margin:0;Margin:0;font-weight:400;mso-line-height-rule:exactly;"></span></p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t25" style="mso-line-height-rule:exactly;mso-line-height-alt:15px;line-height:15px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t30" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="480" class="t29" style="width:600px;">
<table class="t28" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t27"><p class="t26" style="margin:10px;Margin:10px;font-family:Host Grotesk,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:40px;font-weight:800;font-style:normal;font-size:40px;text-decoration:none;text-transform:none;letter-spacing:-0.5px;direction:ltr;color:#FFFFFF;text-align:left;mso-line-height-rule:exactly;">You&#39;re on the Waitlist!</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t31" style="mso-line-height-rule:exactly;mso-line-height-alt:11px;line-height:11px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="left">
<table class="t36" role="presentation" cellpadding="0" cellspacing="0" style="Margin-right:auto;"><tr><td width="415" class="t35" style="width:415px;">
<table class="t34" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t33"><p class="t32" style="margin:10px;Margin:10px;font-family:Inter Tight,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:26px;font-weight:400;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#FFFFFF;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">Congratulations! You&#39;re almost there! To verify and join the exclusive waitlist for Vocapp, please click the button below to confirm your spot.</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t37" style="mso-line-height-rule:exactly;mso-line-height-alt:15px;line-height:15px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="left">
<table class="t42" role="presentation" cellpadding="0" cellspacing="0" style="Margin-right:auto;max-width:480px;"><tr><td class="t41" style="width:auto;">
<table class="t40" role="presentation" cellpadding="0" cellspacing="0" style="margin:10px;Margin:10px;width:auto;max-width:480px;"><tr><td class="t39" style="overflow:hidden;background-color:#65F67A;text-align:center;line-height:43px;mso-line-height-rule:exactly;mso-text-raise:9px;padding:0 30px 0 30px;border-radius:40px 40px 40px 40px;"><a class="t38" href="${confirmWaitlistUrl}" style="display:block;margin:0;Margin:0;font-family:Inter,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:43px;font-weight:600;font-style:normal;font-size:13px;text-decoration:none;text-transform:uppercase;direction:ltr;color:#152A02;text-align:center;mso-line-height-rule:exactly;mso-text-raise:9px;" target="_blank">Confirm waitlist</a></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t44" style="mso-line-height-rule:exactly;mso-line-height-alt:42px;line-height:42px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr><tr><td align="center">
<table class="t48" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="480" class="t47" style="width:600px;">
<table class="t46" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t45" style="overflow:hidden;border-radius:24px 24px 24px 24px;"><div style="font-size:0px;"><img class="t43" style="display:block;border:0;height:auto;width:100%;Margin:0;max-width:100%;" width="480" height="945.1267605633803" alt="" src="https://9d4238a9-e745-4371-8ef6-9c216ffbf26d.b-cdn.net/e/5ff66b56-2df1-437f-9740-d3f9b1be9ebe/32820d51-0abd-4707-b72b-41498367a1be.png"/></div></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t49" style="mso-line-height-rule:exactly;mso-line-height-alt:50px;line-height:50px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr></table></td></tr></table>
</td></tr></table>
</td></tr><tr><td align="center">
<table class="t63" role="presentation" cellpadding="0" cellspacing="0" style="Margin-left:auto;Margin-right:auto;"><tr><td width="600" class="t62" style="width:600px;">
<table class="t61" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t60" style="background-color:#FFFFFF;padding:41px 50px 50px 50px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100% !important;"><tr><td align="left">
<table class="t58" role="presentation" cellpadding="0" cellspacing="0" style="Margin-right:auto;"><tr><td width="500" class="t57" style="width:552px;">
<table class="t56" role="presentation" cellpadding="0" cellspacing="0" width="100%" style="width:100%;"><tr><td class="t55"><p class="t54" style="margin:0;Margin:0;font-family:Inter Tight,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif;line-height:26px;font-weight:400;font-style:normal;font-size:16px;text-decoration:none;text-transform:none;direction:ltr;color:#4D593E;text-align:left;mso-line-height-rule:exactly;mso-text-raise:3px;">You&#39;re receiving this email because you signed up for the Vocapp waitlist. If this doesn&#39;t seem right, you can safely ignore this message.</p></td></tr></table>
</td></tr></table>
</td></tr><tr><td><div class="t59" style="mso-line-height-rule:exactly;mso-line-height-alt:20px;line-height:20px;font-size:1px;display:block;">&nbsp;&nbsp;</div></td></tr></table></td></tr></table>
</td></tr></table>
</td></tr></table></td></tr></table></div>
<!--[if !mso]>-->
<div itemscope itemtype="http://schema.org/EmailMessage"><meta itemprop="subjectLine" content="test" /></div>
<!--<![endif]-->
<div class="gmail-fix" style="display: none; white-space: nowrap; font: 15px courier; line-height: 0;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
</body>
</html>`;
}

export const getHTML = (url: string) => getWaitlistEmailHtml({
  confirmWaitlistUrl: url
});