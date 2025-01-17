export const VERIFICATION_EMAIL_TEMPLATE = `<!doctype html>
<html>
  <head>
    <meta name="viewport" content="width=device-width" />
		<meta name="description" content="Password Reset - Ar18 - Email Templates for developers" />
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<title>Verification Code</title>
    <style>
			html,
			body {
				margin: 0 auto !important;
				padding: 0 !important;
				width: 100% !important;
				font-family: sans-serif;
				line-height: 1.4;
				-webkit-font-smoothing: antialiased;
				-ms-text-size-adjust: 100%;
				-webkit-text-size-adjust: 100%;
			}
			* {
				-ms-text-size-adjust: 100%;
			}
			table,
			td {
				mso-table-lspace: 0pt !important;
				mso-table-rspace: 0pt !important;
			}
			img {
				display: block;
        border: none;
        max-width: 100%;
        -ms-interpolation-mode: bicubic;
      }
			a {
				text-decoration: none;
			}
		</style>
	</head>
	<body
		leftmargin="0"
		marginwidth="0"
		topmargin="0"
		marginheight="0"
		offset="0"
		bgcolor="#F8F8F8"
		width="100%"
		style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background: #F8F8F8;"
	>
		<!-- HEADER -->
		<table
			align="center"
			valign="top"
			border="0"
			cellpadding="0"
			cellspacing="0"
			height="100%"
			width="100%"
			bgcolor="#FFFFFF"
			style="padding: 0; margin: 0; width: 100%; background: #FFFFFF"
		>
			<tr>
				<td>
					<table
						align="center"
						valign="top"
						border="0"
						cellpadding="0"
						cellspacing="0"
						width="500"
						bgcolor="#ffffff"
						style="max-width: 500px; background: #ffffff"
					>
						<tr>
							<td height="30" style="height: 30px;">
								<img
									src="https://moiseshp.github.io/email-templates-for-developers/storage/transparent.png"
									width="1"
									height="1"
									border="0"
									style="display: block; border: none"
								/>
							</td>
						</tr>
						<tr>
							<td>
								<!-- LOGO -->
								<img
									src="./logo.svg"
									style="border: none; display: block; width: 220px;"
									width="220">
							</td>
						</tr>
						<tr>
							<td height="30" style="height: 30px;">
								<img
									src="https://moiseshp.github.io/email-templates-for-developers/storage/transparent.png"
									width="1"
									height="1"
									border="0"
									style="display: block; border: none"
								/>
							</td>
						</tr>
					</table>
				</td>
			</tr>
		</table>
		<!-- END HEADER -->

		<table
			align="center"
			valign="top"
			border="0"
			cellpadding="0"
			cellspacing="0"
			height="100%"
			width="100%"
			bgcolor="#F8F8F8"
			style="padding: 0; margin: 0; width: 100%; background: #F8F8F8"
		>
			<tr>
				<td>
					<!-- MAIN -->
					<table
						align="center"
						valign="top"
						border="0"
						cellpadding="0"
						cellspacing="0"
						width="500"
						style="max-width: 500px"
					>
						<tr>
							<td height="50" style="height: 50px;">
								<img
									src="https://moiseshp.github.io/email-templates-for-developers/storage/transparent.png"
									width="1"
									height="1"
									border="0"
									style="display: block; border: none"
								/>
							</td>
						</tr>
						<tr>
							<td>
								<h1
									style="font-family: Arial, Helvetica;
										font-size: 35px;
										color: #010E28;
										margin: 0;
										padding: 0;
										font-weight: normal;"
								>
									Email verification code
								</h1>
							</td>
						</tr>
						<tr>
							<td height="10" style="height: 10px;">
								<img
									src="https://moiseshp.github.io/email-templates-for-developers/storage/transparent.png"
									width="1"
									height="1"
									border="0"
									style="display: block; border: none"
								/>
							</td>
						</tr>
						<tr>
							<td>
								<p
									style="font-family: Arial, Helvetica;
										font-size: 14px;
										color: #5B6987;
										margin: 0;
										padding: 0;
										line-height: 30px;"
								>
									To continue with your email verification, please enter the following code:
								</p>
							</td>
						</tr>
						<tr>
							<td height="20" style="height: 20px;">
								<img
									src="https://moiseshp.github.io/email-templates-for-developers/storage/transparent.png"
									width="1"
									height="1"
									border="0"
									style="display: block; border: none"
								/>
							</td>
						</tr>
						<tr>
							<td>
								<p
									style="font-family: Arial, Helvetica;
										font-size: 35px;
										color: #010E28;
										margin: 0;
										padding: 0;
										line-height: 30px;
										text-align: left;"
								>
									{verificationCode}
								</p>
							</td>
						</tr>
						<tr>
							<td height="50" style="height: 50px;">
								<img
									src="https://moiseshp.github.io/email-templates-for-developers/storage/transparent.png"
									width="1"
									height="1"
									border="0"
									style="display: block; border: none"
								/>
							</td>
						</tr>
						<tr>
							<td>
								<p
									style="font-family: Arial, Helvetica;
										font-size: 20px;
										color: #5B6987;
										margin: 0;
										padding: 0;
										line-height: 30px;"
								>
									We're here to help
								</p>
							</td>
						</tr>
						<tr>
							<td height="10" style="height: 10px;">
								<img
									src="https://moiseshp.github.io/email-templates-for-developers/storage/transparent.png"
									width="1"
									height="1"
									border="0"
									style="display: block; border: none"
								/>
							</td>
						</tr>
						<tr>
							<td>
								<p
									style="font-family: Arial, Helvetica;
										font-size: 14px;
										color: #5B6987;
										margin: 0;
										margin-bottom: 10px;
										padding: 0;
										line-height: 20px;
										text-align: left;"
								>
									Our award-winning customer Toshboev Sardor is available 24/7. If you have any questions, please visit <a  style="color:#010E28; text-decoration: underline;" href="#">@economistofuzb</a>
								</p>
							</td>
						</tr>
					</table>
				</td>
				<!-- END MAIN -->
			</tr>
			<tr>
				<td height="40" style="height: 40px;">
					<img
						src="https://moiseshp.github.io/email-templates-for-developers/storage/transparent.png"
						width="1"
						height="1"
						border="0"
						style="display: block; border: none"
					/>
				</td>
			</tr>
		</table>
  </body>
</html>`

export const PASSWORD_RESET_SUCCESS_TEMPLATE =
`
<!doctype html>
 <html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Password Reset - Ac89 - Email Templates for developers" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Password Reset - Ac89 - Email Templates for developers</title>
    <style>
        html,
        body {
            margin: 0 auto !important;
            padding: 0 !important;
            width: 100% !important;
            font-family: sans-serif;
            line-height: 1.4;
            -webkit-font-smoothing: antialiased;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
        }
        * {
            -ms-text-size-adjust: 100%;
        }
        table,
        td {
            mso-table-lspace: 0pt !important;
            mso-table-rspace: 0pt !important;
        }
        img {
            display: block;
            border: none;
            max-width: 100%;
            -ms-interpolation-mode: bicubic;
          }
        a {
            text-decoration: none;
        }
    </style>
  </head>
<body>
    <h1>Hello hey!</h1>
</body>
</html>
`

export const PASSWORD_RESET_REQUEST_TEMPLATE =
`
<!doctype html>
<html>
  <head>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<meta name="description" content="Password Reset - Ac89 - Email Templates for developers" />
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<title>Password Reset - Ac89 - Email Templates for developers</title>
		<style>
			html,
			body {
				margin: 0 auto !important;
				padding: 0 !important;
				width: 100% !important;
				font-family: sans-serif;
				line-height: 1.4;
				-webkit-font-smoothing: antialiased;
				-ms-text-size-adjust: 100%;
				-webkit-text-size-adjust: 100%;
			}
			* {
				-ms-text-size-adjust: 100%;
			}
			table,
			td {
				mso-table-lspace: 0pt !important;
				mso-table-rspace: 0pt !important;
			}
			img {
				display: block;
        border: none;
        max-width: 100%;
        -ms-interpolation-mode: bicubic;
      }
			a {
				text-decoration: none;
			}
		</style>
	</head>
	<body
		leftmargin="0"
		marginwidth="0"
		topmargin="0"
		marginheight="0"
		offset="0"
		bgcolor="#F3F5F9"
		width="100%"
		style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background: #F3F5F9;"
	>
		<!--
			| email container
		-->
		<table
			role="presentation"
			align="center"
			valign="top"
			border="0"
			cellpadding="0"
			cellspacing="0"
			height="100%"
			width="100%"
			bgcolor="#F3F5F9"
			style="border-spacing: 0;
				border-collapse: collapse;
				vertical-align: top;
				padding: 0;
				margin: 0;
				width: 100%;
				background: #F3F5F9"
		>
			<tr>
				<td height="30" style="height: 30px;">
					<img
						src="https://moiseshp.github.io/email-templates-for-developers/storage/transparent.png"
						width="1"
						height="1"
						border="0"
						style="display: block; border: none"
					/>
				</td>
			</tr>
			<tr>
				<td align="center"  valign="top">
					<!--
						| top header outside the wrapper
					-->
					<table
						role="presentation"
						align="center"
						border="0"
						cellpadding="0"
						cellspacing="0"
						width="600"
						style="max-width: 600px;
							border-spacing: 0;
							border-collapse: collapse;
							vertical-align: top;
							padding: 0;
							margin: 0;
							width: 100%"
					>
						<tr>
							<td>
								<p
									style="text-align: center;
										font-family: Arial, Helvetica, sans-serif;
										font-size: 12px;
										color: #99A1B3;
										margin: 0;
										padding: 0;
										line-height: 14px;
										font-weight: bold;
										padding: 0 20px;"
								>
									To ensure delivery, add <a href="mailto:no-reply@company.com" style="color: #0069FF">no-reply@company.com</a> to your address book
								</p>
							</td>
						</tr>
					</table>
					<!--
						| END / top header outside the wrapper
					-->
				</td>
			</tr>
			<tr>
				<td height=20" style="height: 20px;">
					<img
						src="https://moiseshp.github.io/email-templates-for-developers/storage/transparent.png"
						width="1"
						height="1"
						border="0"
						style="display: block; border: none"
					/>
				</td>
			</tr>
			<tr>
				<td align="center" valign="top">
					<!--
						| email wrapper
					-->
					<table
						role="presentation"
						align="center"
						border="0"
						cellpadding="0"
						cellspacing="0"
						width="600"
						bgcolor="#ffffff"
						style="max-width: 600px;
							border-spacing: 0;
							border-collapse: collapse;
							vertical-align: top;
							padding: 0;
							margin: 0;
							width: 100%;
							background: #ffffff;"
					>
						<tr>
							<td
								height="5"
								style="height: 5px;
									background-color: #0069FF;
									background-image: linear-gradient(-45deg, #0248FF, #0069FF);"
							>
								<img
									src="https://moiseshp.github.io/email-templates-for-developers/storage/transparent.png"
									width="1"
									height="1"
									border="0"
									style="display: block; border: none"
								/>
							</td>
						</tr>
						<tr>
							<td height=40" style="height:40px">
								<img
									src="https://moiseshp.github.io/email-templates-for-developers/storage/transparent.png"
									width="1"
									height="1"
									border="0"
									style="display: block; border: none"
								/>
							</td>
						</tr>
						<tr>
							<td align="center" valign="top">
								<!--
									| content container
								-->
								<table
									role="presentation"
									align="center"
									border="0"
									cellpadding="0"
									cellspacing="0"
									width="440"
									style="max-width: 440px;
										border-spacing: 0;
										border-collapse: collapse;
										vertical-align: top;
										padding: 0;
										margin: 0;
										width: 100%;"
								>
									<tr>
										<td align="center">
											<!--
												| logotype
											-->
											<img
												src="https://moiseshp.github.io/email-templates-for-developers/storage/dummylogo-v.png"
												width="170"
												style="border: none; display: block; max-width: 170px; width: 100%"
											>
										</td>
									</tr>
									<tr>
										<td height="40" style="height:40px">
											<img
												src="https://moiseshp.github.io/email-templates-for-developers/storage/transparent.png"
												width="1"
												height="1"
												border="0"
												style="display: block; border: none"
											/>
										</td>
									</tr>
									<tr>
										<td>
											<h1
												style="font-family: Arial, Helvetica, sans-serif;
													font-size: 24px;
													color: #010E28;
													font-weight: bold;
													margin: 0;
													margin-bottom: 5px;
													padding: 0"
											>
												Hi, Yennifer Almeyda!
											</h1>
											<p
												style="font-family: Arial, Helvetica, sans-serif;
													font-size: 16px;
													color: #010E28;
													margin: 0;
													padding: 0"
											>
												Forgotten password request
											</p>
										</td>
									</tr>
									<tr>
										<td height="15" style="height: 15px">
											<img
												src="https://moiseshp.github.io/email-templates-for-developers/storage/transparent.png"
												width="1"
												height="1"
												border="0"
												style="display: block; border: none"
											/>
										</td>
									</tr>
									<tr>
										<td>
											<p
												style="font-family: Arial, Helvetica, sans-serif;
													font-size: 15px;
													color: #5B6987;
													margin: 0;
													padding: 0;
													line-height: 20px;"
												>
												It seems your forgot the password for your account. You can change your password by clicking the button below:
											</p>
										</td>
									</tr>
									<tr>
										<td height="45" style="height: 45px">
											<img
												src="https://moiseshp.github.io/email-templates-for-developers/storage/transparent.png"
												width="1"
												height="1"
												border="0"
												style="display: block; border: none"
											/>
										</td>
									</tr>
									<tr>
										<td align="center">
											<table
												role="presentation"
												border="0"
												cellpadding="0"
												cellspacing="0"
												width="440"
												style="max-width: 440px;
													border-spacing: 0;
													border-collapse: collapse;
													vertical-align: top;
													margin: 0;
													width: 100%;"
											>
												<tr>
													<td width="70" style="width: 70px">
														<img
															src="https://moiseshp.github.io/email-templates-for-developers/storage/transparent.png"
															width="1"
															height="1"
															border="0"
															style="display: block; border: none"
														/>
													</td>
													<td
														style="font-family: Arial, Helvetica, sans-serif;
															width: 300px;
															background-color: #0248FF;
															background-image: linear-gradient(-45deg, #0248FF, #0069FF);
															color: #FFF;
															height: 55px;
															line-height: 55px;
															border-radius: 4px;
															text-align: center;
															font-weight: bold;"
													>
														<a
															href="{resetUrl}"
															style="font-family: Arial, Helvetica, sans-serif;
																width: 100%;
																background-color: #0248FF;
																background-image: linear-gradient(-45deg, #0248FF, #0069FF);
																color: #FFF;
																height: 55px;
																line-height: 55px;
																border-radius: 4px;
																text-align: center;
																font-weight: bold;
																display: block;
																text-decoration: none;
																cursor: pointer;"
														>
															Change password
														</a>
													</td>
													<td width="70" style="width: 70px">
														<img
															src="https://moiseshp.github.io/email-templates-for-developers/storage/transparent.png"
															width="1"
															height="1"
															border="0"
															style="display: block; border: none"
														/>
													</td>
												</tr>
											</table>
										</td>
									</tr>
									<tr>
										<td height="45" style="height: 45px">
											<img
												src="https://moiseshp.github.io/email-templates-for-developers/storage/transparent.png"
												width="1"
												height="1"
												border="0"
												style="display: block; border: none"
											/>
										</td>
									</tr>
									<tr>
										<td>
											<p
												style="font-family: Arial, Helvetica, sans-serif;
													font-size: 15px;
													color: #5B6987;
													margin: 0;
													padding: 0;
													line-height: 20px;"
											>
												John and the <strong style="font-weight: bold; color: #010E28">Company Inc</strong> Team.
											</p>
										</td>
									</tr>
									<tr>
										<td height="30" style="height: 30px">
											<img
												src="https://moiseshp.github.io/email-templates-for-developers/storage/transparent.png"
												width="1"
												height="1"
												border="0"
												style="display: block; border: none"
											/>
										</td>
									</tr>
									<tr>
										<td>
											<p
												style="font-family: Arial, Helvetica, sans-serif;
													font-size: 12px;
													color: #5B6987;
													margin: 0;
													padding: 0;
													line-height: 20px;
													text-align: left;"
											>
												If you're having trouble clicking the password reset button, copy and paste the URL below into your web browser:
											</p>
										</td>
									</tr>
									<tr>
										<td height="10" style="height: 10px">
											<img
												src="https://moiseshp.github.io/email-templates-for-developers/storage/transparent.png"
												width="1"
												height="1"
												border="0"
												style="display: block; border: none"
											/>
										</td>
									</tr>
									<tr>
										<td>
											<p
												style="font-family: Arial, Helvetica, sans-serif;
													font-size: 12px;
													color: #5B6987;
													margin: 0;
													padding: 0;
													line-height: 20px;
													text-align: left;"
											>
												{resetUrl}/reset-password/
											</p>
										</td>
									</tr>
								</table>
								<!--
									| END / content container
								-->
							</td>
						</tr>
						<tr>
							<td height="40" style="height:40px">
								<img
									src="https://moiseshp.github.io/email-templates-for-developers/storage/transparent.png"
									width="1"
									height="1"
									border="0"
									style="display: block; border: none"
								/>
							</td>
						</tr>
					</table>
					<!--
						| END / email wrapper
					-->

					<!--
						| footer legals
					-->
					<table
						role="presentation"
						align="center"
						valign="top"
						border="0"
						cellpadding="0"
						cellspacing="0"
						width="600"
						style="border-spacing: 0;
							border-collapse: collapse;
							vertical-align: top;
							padding: 0;
							margin: 0;"
					>
						<tr>
							<td height="30" style="height:30px">
								<img
									src="https://moiseshp.github.io/email-templates-for-developers/storage/transparent.png"
									width="1"
									height="1"
									border="0"
									style="display: block; border: none"
								/>
							</td>
						</tr>
						<tr>
							<td align="center" valign="top">
								<table
									border="0"
									cellpadding="0"
									cellspacing="0"
									width="440"
									style="max-width: 440px;
										border-spacing: 0;
										border-collapse: collapse;
										vertical-align: top;
										padding: 0;
										margin: 0;"
								>
									<tr>
										<td>
											<p
												style="font-family: Arial, Helvetica, sans-serif;
													font-size: 12px;
													color: #99A1B3;
													margin: 0;
													padding: 0;
													line-height: 16px;
													text-align: center"
											>
												Fermentum varius, <a href="mailto:yennifer@mail.com" style="color: #0069FF">yennifer@mail.com</a>
												<br />
												214 Vestibulum 24th blandit fringilla Consectetur 1929.
												<br />
												<a href="#" style="font-weight: bold; color: #99A1B3">Terms</a>
												/
												<a href="#" style="font-weight: bold; color: #99A1B3">Privacy Policy</a>
											</p>
										</td>
									</tr>
								</table>
							</td>
						</tr>
					</table>
					<!--
						| END / footer legals
					-->

				</td>
			</tr>
			<tr>
				<td height="40">
					<img
						src="https://moiseshp.github.io/email-templates-for-developers/storage/transparent.png"
						width="1"
						height="1"
						border="0"
						style="display: block; border: none"
					/>
				</td>
			</tr>
		</table>
		<!--
			| END / email container
		-->

  </body>
</html>
`
