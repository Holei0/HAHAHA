<!doctype html>
<html>
<head>
  <title>HTML &lt;FORM&gt; 接收回應測試</title>
  <meta charset="utf-8">


  <style>
    body {
      padding-bottom: 100px;
    }

    h3:not(:nth-child(2)) {
      margin-top: 100px;
    }

    p {
      font-style: italic;
      padding-left: 30px;
    }

    ul {
      margin-bottom: 10px;
    }

    li > b {
      color: #0099aa;
    }

    li > span {
      color: #cc0000;
    }
  </style>

</head>

<body>

  <h1>HTML &lt;FORM&gt; 接收回應測試</h1>

  <?php if (isset($_REQUEST['isPrintEnv'])) { ?>
    <h2>伺服端環境變數</h2>
    <ul>
      <?php foreach($_SERVER as $key => $value) { ?>
      <li><b><?php echo $key ?></b> = <?php echo $value ?></li>
      <?php } ?>
    </ul>
  <?php } ?>


  <h3>GET:</h3>
  <p>(for GET [enctype="application/x-www-form-urlencoded")</p>
  <?php if (is_array($_GET)) { ?>
  <ul>
    <?php foreach($_GET as $key => $value) { ?>
    <li><b><?php echo $key ?> = </b>
      <?php if (!is_array($value)) { ?>
        <span><?php echo $value ?></span>
      <?php } else { ?>
        <ul>
          <?php foreach($value as $i => $item) { ?>
          <li><b>[<?php echo $i ?>] = </b><span><?php echo $item ?></span></li>
          <?php } ?>
        </ul>
      <?php } ?>
    </li>
    <?php } ?>
  </ul>
  <?php } ?>



  <h3>POST:</h3>
  <p>(for POST [enctype="application/x-www-form-urlencoded | multipart/form-data"])</p>
  <?php if (is_array($_POST)) { ?>
  <ul>
    <?php foreach($_POST as $key => $value) { ?>
    <li><b><?php echo $key ?> = </b>
      <?php if (!is_array($value)) { ?>
        <span><?php echo $value ?></span>
      <?php } else { ?>
        <ul>
          <?php foreach($value as $i => $item) { ?>
          <li><b>[<?php echo $i ?>] = </b><span><?php echo $item ?></span></li>
          <?php } ?>
        </ul>
      <?php } ?>
    </li>
    <?php } ?>
  </ul>
  <?php } ?>



  <h3>FILES</h3>
  <p>(for POST [enctype="multipart/form-data"]):</p>
  <ul>
    <?php foreach($_FILES as $key => $list) { ?>
    <li>
        <b><?php echo $key ?> = </b>
        <?php if (!is_array($list['name'])) { ?>
          <ul>
            <?php foreach($list as $attr => $attrValue) { ?>
            <li>
              <b><?php echo $attr ?> = </b>
              <span><?php echo $attrValue ?></span>
            </li>
            <?php } ?>
          </ul>
        <?php } else { ?>
          <ul>
            <?php for($i = 0; $i < count($list['name']); $i++) { ?>
            <li>
              <b>[<?php echo $i ?>] = </b>
              <ul>
                <?php foreach($list as $attr => $items) { ?>
                <li>
                  <b><?php echo $attr ?> = </b>
                  <span><?php echo $items[$i] ?></span>
                </li>
                <?php } ?>
              </ul>
            </li>
            <?php } ?>
          </ul>
        <?php }?>
    </li>
    <?php } ?>
  </ul>





</body>
</html>