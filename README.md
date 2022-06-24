# Demon Slayer API
<h4>Use NodeJS to crawl data from webiste: https://kimetsu-no-yaiba.fandom.com/wiki/Kimetsu_no_Yaiba_Wiki</h4>
 <p dir="auto">
        <animated-image data-catalyst=""><a target="_blank" rel="noopener noreferrer"
                href="https://github.com/KhuongNC/demon-slayer-api/blob/master/Tanjiro.gif"
                data-target="animated-image.originalLink" hidden=""><img
                    src="https://github.com/KhuongNC/demon-slayer-api/blob/master/Tanjiro.gif" alt="tanjiro"
                    style="max-width: 100%;" data-target="animated-image.originalImage" hidden=""></a>
            <span class="AnimatedImagePlayer enabled" data-target="animated-image.player">
                <a data-target="animated-image.replacedLink" class="AnimatedImagePlayer-images"
                    href="https://github.com/KhuongNC/demon-slayer-api/blob/master/Tanjiro.gif" target="_blank"
                    hidden="">
                </a>
            </span>
        </animated-image>
 </p>

<h4>Use some packages to do it:</h4>
<ul>
  <li>Express</li>
  <li>Body Parser</li>
  <li>Axios</li>
  <li>Cheerio</li>
  <li>Cors</li>
  <li>Dotenv</li>
</ul>
<h4>Deploy at https://render.com/</h4>
<h2>Endpoints</h2>
<h3>Get al characters</h3>
<p>GET https://demon-slayer-api-bf9i.onrender.com/v1/</p>
<blockquote>
  <p dir="auto">Query limit: <code>GET https://demon-slayer-api-bf9i.onrender.com/v1/?limit=5</code></p>
</blockquote>
<table>
  <thead>
    <tr>
      <th>Keys</th>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>name</td>
      <td>String</td>
    </tr>
    <tr>
      <td>url</td>
      <td>String</td>
    </tr>
    <tr>
      <td>image</td>
      <td>String</td>
    </tr>
  </tbody>
</table>
<h3>Get one character</h3>
<p><code>GET https://demon-slayer-api-bf9i.onrender.com/v1/Tanjiro_Kamado</code></p>
<table>
  <thead>
    <tr>
      <th>Keys</th>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>name</td>
      <td>String</td>
    </tr>
    <tr>
      <td>gallery</td>
      <td>[String]</td>
    </tr>
    <tr>
      <td>image</td>
      <td>String</td>
    </tr>
    <tr>
      <td>race</td>
      <td>String</td>
    </tr>
    <tr>
      <td>gender</td>
      <td>String</td>
    </tr>
    <tr>
      <td>age</td>
      <td>String</td>
    </tr>
    <tr>
      <td>height</td>
      <td>String</td>
    </tr>
    <tr>
      <td>weight</td>
      <td>String</td>
    </tr>
    <tr>
      <td>birthday</td>
      <td>String</td>
    </tr>
    <tr>
      <td>hair color</td>
      <td>String</td>
    </tr>
    <tr>
      <td>eye color</td>
      <td>String</td>
    </tr>
    <tr>
      <td>affiliation</td>
      <td>String</td>
    </tr>
    <tr>
      <td>occupation</td>
      <td>String</td>
    </tr>
    <tr>
      <td>combat style</td>
      <td>String</td>
    </tr>
    <tr>
      <td>partner(s)</td>
      <td>String</td>
    </tr>
    <tr>
      <td>status</td>
      <td>String</td>
    </tr>
    <tr>
      <td>relative(s)</td>
      <td>String</td>
    </tr>
    <tr>
      <td>manga debut</td>
      <td>String</td>
    </tr>
    <tr>
      <td>anime debut</td>
      <td>String</td>
    </tr>
    <tr>
    <td>japanese va</td>
    <td>String</td>
    </tr>
    <tr>
      <td>english va</td>
      <td>String</td>
    </tr>
    <tr>
      <td>stage play</td>
      <td>String</td>
    </tr>
  </tbody>
</table>
