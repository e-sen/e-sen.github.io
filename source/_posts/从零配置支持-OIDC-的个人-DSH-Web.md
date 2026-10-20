---
title: 从零配置支持 OIDC 的个人 DSH Web：Authing 创建应用、关闭注册与部署
date: 2026-10-20 17:00:00
tags:
  - DeepSeek Harness
  - OIDC
  - Authing
categories:
  - 开发
description: 从注册 Authing、创建个人账号和应用开始，一步步给 DeepSeek Harness Web 配置 OIDC 登录，关闭公开注册，只允许本人访问。
---

已经运行起来的 DSH Web，怎样改成打开网页后先登录，且只有自己可以使用？本文以 Authing 为身份提供方，从创建账号、创建应用、关闭注册开始，完成一个支持 OIDC 的个人 DSH Web。

<!-- more -->

本文基于 2026-10-20 的 DeepSeek Harness 版本编写，对应提交 `ee5daa434a`。DSH 仍在开发者预览阶段；使用其他版本时，请核对文末的官方说明。Authing 的菜单名称可能随控制台版本变化，可以结合截图和配置项名称查找。

完成本文后，你将得到一个使用 Authing 登录的 DSH Web：关闭公开注册，仅允许指定账号访问，并通过 Nginx Proxy Manager 将域名转发到内网服务。教程配有实际配置截图，涵盖从创建用户池到登录 DSH 首页的完整过程。

截图中的个人头像及 NPMplus 管理员账号信息已打码；示例用户名、域名、内网 IP 和配置项保留，便于对照操作。

## 第 1 步：先准备好地址，分清两类账号

先确定你要使用哪一种访问方式：

| 用途 | DSH 入口 | 在 Authing 登记的登录回调 URL |
| --- | --- | --- |
| 本机验证 | `http://127.0.0.1:3080` | `http://127.0.0.1:3080/auth/oidc/callback` |
| 自己长期使用的部署 | `http://demo.dsh.cavacn.com` | `http://demo.dsh.cavacn.com/auth/oidc/callback` |

本文实际域名为 `demo.dsh.cavacn.com`，NPMplus 转发目标为 `192.168.1.199:8889`，不启用 TLS。回调地址的协议、域名、端口和路径必须逐字一致。`localhost` 和 `127.0.0.1` 是不同地址，配置后请始终使用同一个。

OIDC 模式下，DSH 必须部署在域名根路径，不能使用 `https://example.com/dsh/` 这样的子路径。Authing issuer 必须使用 HTTPS；本机 DSH 回调能否使用 HTTP 还需符合 Authing 当前的回调策略。

还要分清两类账号：

- **Authing 控制台管理员账号**：用来创建用户池、配置应用和管理用户。
- **用户池内的个人用户账号**：用来登录 DSH，需要在用户池里另外创建。

注册了控制台账号，不代表已经有了可登录 DSH 的用户。

**DSH 当前的 OIDC 登录是单 owner 模式：所有被 Authing 应用允许登录的人，都会获得同一个 DSH owner 的权限，能够访问对应的数据和工具。** 因此本文会同时关闭注册、将应用默认权限设为拒绝，并只授权自己的用户。

## 第 2 步：注册 Authing 控制台账号，创建用户池

1. 从 [Authing 登录入口](https://authing.cnauthing.cn/) 进入，按照页面提示注册控制台账号，完成邮箱或手机号验证；已有账号则直接登录。
2. 登录后进入 [Authing 控制台](https://console.authing.cn/)。如果前一个入口无法打开，可以直接从控制台进入登录或注册。
3. 第一次登录会进入引导。当前引导页可点击“跳过”，随后选择用户池类型。
4. 这个场景是为自己的 Web 应用管理登录用户，选择“我想为我的 C 端用户提供更好的身份认证体验”，用户池名称填写 `personal-dsh-demo`，创建独立用户池。
5. **取消勾选“开启体验期，30 天体验所有功能”**，本文不启用体验期。
6. 进入新用户池，确认顶部显示的是刚创建的用户池，避免后续改到其他应用正在使用的用户池。

用户池是存放登录用户和相关策略的地方。个人 DSH 使用独立用户池，后面开启“禁止注册”时就不会影响自己的其他业务。


![Authing 新账号欢迎页，点击跳过开始创建用户池](/images/dsh-oidc/01-authing-welcome.png)

![选择 C 端用户池，并取消开启体验期](/images/dsh-oidc/02-authing-userpool-type.png)

![创建 B2C 用户池，填写 personal-dsh-demo 和图形验证码](/images/dsh-oidc/03-authing-create-userpool.png)

填写图形验证码，点击“完成创建”。进入用户池首页后，继续创建用于登录 DSH 的个人账号。

![personal-dsh-demo 用户池已创建，控制台首页](/images/dsh-oidc/04-authing-pool-created.png)

## 第 3 步：在用户池中创建自己的登录账号

1. 在控制台左侧找到“用户管理 → 用户列表”。
2. 点击“创建用户”或“添加用户”。
3. 在创建用户弹窗选择“用户名”，填写 `dsh-owner`。当前表单按用户名、手机号、邮箱分别创建，本文使用“用户名 + 密码”。
4. 手动清空默认生成的密码，输入本教程的示例密码 `Abc123456`，不要点击“自动生成密码”。用户名为 `dsh-owner`。本示例公开密码供复现，实际个人部署请换成自己的独立密码。
5. 保存后，返回用户列表，搜索 `dsh-owner`，确认用户存在且处于可用状态。
6. 打开用户详情，记录用户 ID，后面给应用授权时用它确认选中的是本人。

如果启用了“禁止邮箱未验证的用户登录”，需要先走完邮箱验证流程。不要仅为了通过登录而把未验证邮箱随意标记为已验证。


**本步验收：** 用户池里已有一个能够使用密码登录的个人用户，而不只是控制台管理员账号。

![真实创建用户弹窗，填写 dsh-owner 并手动输入示例密码 Abc123456](/images/dsh-oidc/05-authing-create-owner.png)

![用户列表已出现 dsh-owner，状态正常](/images/dsh-oidc/06-authing-owner-created.png)

## 第 4 步：创建 DSH 的自建 Web 应用

1. 进入“应用 → 自建应用”。新用户池会自动生成一个“示例应用”，本文直接使用它。如果点击“创建自建应用”提示“自建应用用量已达上限”，返回列表打开示例应用即可，无需开启体验期或升级。
2. 在“应用配置”把应用名称改为 `DSH Web Demo`，点击基本信息区域的“保存”。
3. 保留已有认证地址。截图中的认证域名为 `qcrtmhbucax6-demo.authing.cn`；操作时请使用自己控制台显示的值。
4. 应用类型已经是“标准 Web 应用”。DSH 有后端，应用 Secret 由后端保管。
5. 找到“认证配置 → 登录回调 URL”，填写实际域名回调：

   ```text
   http://demo.dsh.cavacn.com/auth/oidc/callback
   ```

6. 如果需要填写“发起登录 URL”，填写：

   ```text
   http://demo.dsh.cavacn.com/auth/oidc/login
   ```

7. 保存。在应用配置或端点信息中找到 **App ID** 和 **App Secret**，分别对应 DSH 的 `clientId` 与 `clientSecret`。Secret 放进密码管理器，后面只在自己的终端里输入。

认证域名由 Authing 提供，用于显示登录页；DSH 域名由你部署，用于访问 DSH。它们是两个地址。

![免费用户池创建应用达到上限，改用已有示例应用](/images/dsh-oidc/07-authing-app-limit.png)

![DSH Web Demo 实际应用配置，Secret 隐藏，HTTP 回调已保存](/images/dsh-oidc/08-authing-app-config.png)

名称与认证配置分别有保存按钮。保存回调后刷新页面，确认地址已保留。如果登录时出现 `redirect_uri_mismatch`，先检查这里是否保存成功，以及回调地址是否完全一致。



## 第 5 步：配置 OIDC 协议，特别检查这两个选项

进入应用的“协议配置 → OIDC”，按下表设置，并保存各配置区域。

| 配置项 | 本文使用的值 |
| --- | --- |
| 授权模式 / Grant type | `authorization_code` |
| 返回类型 / Response type | `code` |
| 换取 token 身份验证方式 | `client_secret_post` |
| ID token 签名算法 | `RS256` |
| PKCE | 应支持 `S256`，DSH 会主动发送 PKCE 参数 |
| Scope | DSH 登录请求使用 `openid` |

**换取 token 的认证方式必须是 `client_secret_post`，ID token 签名算法必须是 `RS256`。** 当前 DSH 不支持用 `HS256` 验证 ID token。Authing 文档还有面向纯前端应用、将认证方式设为 `none` 的 PKCE 示例；这里应按上表配置，DSH 会同时使用服务端 Secret 和 PKCE。

![实际 OIDC 协议配置，仅授权码模式，RS256 和 client_secret_post](/images/dsh-oidc/09-authing-oidc-rs256.png)

取消默认开启的 `password` 和 `refresh_token` 授权模式，仅保留 `authorization_code`，返回类型保留 `code`，点击该区域的“保存”。


然后查找 OIDC 的“端点信息”或“服务发现”链接。Authing 常见的 issuer 格式是：

```text
https://你的应用认证域名/oidc
```

不要把控制台地址、登录页面地址或 `/oidc/auth` 当成 issuer。打开应用实际提供的 discovery URL；常见形式如下：

```text
https://你的应用认证域名/oidc/.well-known/openid-configuration
```

返回的是 JSON，其中至少应能找到 `issuer`、`authorization_endpoint`、`token_endpoint` 和 `jwks_uri`。**复制返回 JSON 中的 `issuer` 原值**，后续作为 `DSH_OIDC_ISSUER`；不要根据示例猜域名或自行增删斜杠。

可以在终端检查，先把域名换成应用的真实域名：

```bash
curl --fail --silent --show-error \
  'https://你的应用认证域名/oidc/.well-known/openid-configuration'
```

**本步验收：** 已记录 issuer、App ID、App Secret 和回调 URL，且签名算法与 token 认证方式都符合上表。

## 第 6 步：关闭公开注册，只保留密码登录

### 6.1 在用户池层面禁止注册

1. 进入“安全设置 → 通用安全 → 注册安全”。
2. 找到“禁止注册”，**开启这个开关**。注意开关名称是“禁止注册”，所以这里是开启，而不是关闭。
3. 按页面提示保存。

Authing 官方对这个配置的说明是：开启后，普通用户不能通过登录表单或者 API 注册，只有管理员可以手动创建账号。这是用户池级设置。

![实际注册安全页，禁止注册已勾选并保存](/images/dsh-oidc/14-authing-registration-disabled.png)


### 6.2 调整 DSH 应用的登录页

1. 回到“应用 → 自建应用 → DSH Web → 登录控制”。
2. 在“登录注册方式”中选择“登录注册分页”，方便明确区分登录与注册。
3. 登录方式只保留“用户名 + 密码”，默认登录方式选择密码登录。
4. 如果页面提供“允许注册”或“显示注册入口”设置，将其关闭；注册方式如允许取消，也取消不需要的方式。真正阻止注册的设置仍是上面的“禁止注册”。
5. 关闭本应用不需要的短信或邮箱验证码登录、社会化身份源和企业身份源，避免其他登录方式引入自动建号流程。
6. 保存，打开“体验登录”，确认页面可以使用用户名和密码登录。

即使登录页已经看不到注册按钮，也仍需保留用户池的“禁止注册”设置。

![实际登录控制页，仅保留用户名密码登录](/images/dsh-oidc/10-authing-password-only.png)

当前控制台用表格列出账号字段、“用于登录”和“用于注册”。用户名密码一行勾选“用于登录”，其余不需要的行取消。点击“保存”后，还要在确认弹窗选择“立即发布”，配置才会生效。


## 第 7 步：默认拒绝所有人，只授权自己

关闭注册不会移除已经存在的用户，所以还需要设置应用准入。

1. 进入“DSH Web → 访问授权 → 应用访问控制”。
2. 将“默认权限”从“允许所有用户访问”改为 **“拒绝所有用户访问”**，保存。
3. 点击“添加”，授权类型选择“用户”。
4. 搜索第 3 步创建的 `dsh-owner`，核对用户 ID，选择本人并授予访问权限。
5. 确认这条授权的“是否生效”处于开启状态。
6. 检查列表，移除不需要的用户、角色、分组或组织机构授权，最终只保留本人用户的有效允许授权。

这里设置的是“应用访问控制”。只在资源权限里建一个角色或一条 API 权限，并不能替代这个步骤。

![添加应用授权，搜索并选择 dsh-owner](/images/dsh-oidc/11-authing-select-owner.png)

点击“下一步”，授权作用选择“允许”，再保存。

![应用授权第二步，只允许所选用户](/images/dsh-oidc/12-authing-allow-owner.png)

![保存后的实际授权列表，所有人拒绝，dsh-owner 允许](/images/dsh-oidc/13-authing-access-saved.png)

如果控制台已显示默认规则“所有人 → 拒绝”，保留这条规则，只新增本人用户的允许授权。


**本步验收：** 默认拒绝，显式允许本人。如果当前套餐没有应用访问控制能力，先确认可用方案，再继续对外部署。

## 第 8 步：准备 DSH，保留已有数据和配置

已经启动过 DSH Web 的读者，先在运行它的终端按 `Ctrl+C` 停止原进程，避免新进程与它争用 3080 端口。下面沿用同一个系统用户和 `DSH_HOME`，已有会话与配置才能继续使用。

本文使用现有源码目录：

```bash
cd /home/iamee/apps/deepseek-harness
```

其他机器可以按官方方式准备源码，Node.js 版本要求为 `^22.19 || >=24`，并准备 pnpm：

```bash
git clone https://github.com/maix-chat/deepseek-harness.git
cd deepseek-harness
pnpm install
pnpm run build
```

已有构建产物可直接使用；`pnpm dsh web` 不会自动重新构建。下面所有启动命令都在仓库根目录执行。

确认数据目录；如果之前指定了其他 `DSH_HOME`，继续使用那个实际值：

```bash
export DSH_HOME="${DSH_HOME:-$HOME/.dsh}"
mkdir -p "$DSH_HOME/profiles/web"
```

编辑下面这个用户配置文件：

```text
$DSH_HOME/profiles/web/cordis.patch.yml
```

如果文件已有内容，先备份。将下面的条目合并进去：没有 `id: connection` 时新增一个；已有这个条目时编辑原条目，保留自己仍然需要的 Connection 设置，不要再添加第二个同名条目。

```yaml
- id: connection
  config:
    trustedHosts: !!js ctx.webStartup.trustedHosts
    oidc:
      issuer: !!js process.env.DSH_OIDC_ISSUER
      clientId: !!js process.env.DSH_OIDC_CLIENT_ID
      clientSecret: !!js process.env.DSH_OIDC_CLIENT_SECRET
      redirectUri: !!js process.env.DSH_OIDC_REDIRECT_URI
```

DSH 的 patch 会替换目标条目的**整个 `config`**，并非逐字段合并。保留 `trustedHosts` 这一行，后面的 `--trusted-host` 参数才能传入 Connection 配置。已有文件中的模型设置、其他插件条目也需要保留。

这里的标签是 `!!js`，有两个感叹号。环境变量名由这些表达式引用；单独设置环境变量、却不添加 `oidc` 配置，不会自动开启 OIDC。

## 第 9 步：先在本机完成一次登录

以下命令在 **Bash** 中执行；从 zsh 进入 `bash` 后再运行，避免两种 shell 的 `read` 选项差异。在同一个终端设置环境变量并启动 DSH：

```bash
export DSH_HOME="${DSH_HOME:-$HOME/.dsh}"
export DSH_OIDC_ISSUER='https://你的应用认证域名/oidc'
export DSH_OIDC_CLIENT_ID='替换为应用的 App ID'
export DSH_OIDC_REDIRECT_URI='http://127.0.0.1:3080/auth/oidc/callback'
read -r -s -p '请输入 Authing App Secret：' DSH_OIDC_CLIENT_SECRET
printf '\n'
export DSH_OIDC_CLIENT_SECRET

pnpm dsh web --port 3080 --no-open
```

issuer 必须换成第 5 步 discovery 返回的原值。输入 Secret 时终端不会回显，输入完成后按 Enter；这样 Secret 不会直接进入命令历史。新终端和后台服务不会自动继承这个终端的变量，之后每次启动都需要正确提供它们。

浏览器打开：

```text
http://127.0.0.1:3080
```

预期过程是：DSH 跳到 `/auth/oidc/login`，再跳到 Authing；输入 `dsh-owner` 和密码；Authing 跳回 `/auth/oidc/callback`；DSH 完成校验后返回首页。


请从 DSH 入口开始整次登录，不能直接打开回调地址。回调需要由本次登录产生的授权码及浏览器 Cookie。

如果 DSH 运行在远程机器，可以先在自己的电脑建立 SSH 转发，再用本地浏览器访问上述地址：

```bash
ssh -N -L 3080:127.0.0.1:3080 用户名@服务器地址
```

如果电脑的 3080 被占用，需要统一修改转发端口、浏览器入口、Authing 回调和 `DSH_OIDC_REDIRECT_URI`，不能只改一处。这里的回调 `127.0.0.1` 指浏览器所在的电脑，由 SSH 把请求转给服务器。

登录成功只说明身份认证已经连通。如果还没有配置模型，进入 DSH 设置中的模型页，按提供商提示设置 API Key、选择模型，再新建会话发送消息。Authing 的 App Secret 与模型 API Key 是两份不同的凭据。

## 第 10 步：用 Nginx Proxy Manager 将域名转发到内网端口

下面使用 NPMplus（Nginx Proxy Manager 的衍生版本）配置代理。先将域名 DNS 解析到代理服务器，再建立以下映射：

```text
浏览器 http://demo.dsh.cavacn.com
    → NPMplus HTTP 80
    → 内网 http://192.168.1.199:8889
```

8888 已被现有服务使用。demo 使用独立的 8889 端口和独立的数据目录，保留原服务。

### 10.1 创建 Proxy Host

1. 进入 NPMplus 的 Hosts → Proxy Hosts。
2. 点击 Add Proxy Host。
3. Domain Names 输入 `demo.dsh.cavacn.com`，按 Enter 确认。
4. Scheme 选择 `http://`。
5. Forward Hostname / IP / Path 填写 `192.168.1.199`。
6. Forward Port 填写 `8889`。
7. 保持域名根路径转发，鉴权交给后续 DSH OIDC 配置。

![NPMplus 实际域名和内网 8889 端口配置](/images/dsh-oidc/20-npm-proxy-details.png)

### 10.2 不开启 TLS

1. 切换 TLS 标签。
2. TLS Certificate 保持 `None`。
3. Force HTTPS 不勾选，不申请证书。
4. 点击 Save。

![NPMplus TLS 选择 None，未开启 Force HTTPS](/images/dsh-oidc/21-npm-no-tls.png)

### 10.3 确认保存结果

返回列表，搜索 `demo.dsh.cavacn.com`，确认 Destination 为 `http://192.168.1.199:8889`，TLS 为 HTTP Only。

![NPMplus 已保存 demo 域名到内网 8889 的映射](/images/dsh-oidc/23-npm-proxy-online.png)

列表中的 Online 表示代理配置已加载。后端 DSH 启动后，还需要通过域名访问并完成登录，才能确认整条链路正常。

### 10.4 使用外部域名作为 Authing 回调

在 Authing 应用登记下面的地址。示例应用使用 HTTP 回调；如果你的应用策略限制 HTTP，请先核对提供方的回调要求：

```text
登录回调 URL：http://demo.dsh.cavacn.com/auth/oidc/callback
发起登录 URL：http://demo.dsh.cavacn.com/auth/oidc/login
```

为 demo 设置独立的数据目录，将第 8 步的 OIDC patch 保存到这个目录对应的 profile；在同一个 Bash 终端提供第 9 步的 issuer、App ID 和 Secret 后启动：

```bash
cd /home/iamee/apps/deepseek-harness
export DSH_HOME="$HOME/.dsh-demo"
mkdir -p "$DSH_HOME/profiles/web"
export DSH_OIDC_REDIRECT_URI='http://demo.dsh.cavacn.com/auth/oidc/callback'
pnpm dsh web --host 192.168.1.199 --port 8889 \
  --public-url http://demo.dsh.cavacn.com \
  --trusted-host demo.dsh.cavacn.com \
  --no-open
```

运行前必须把 OIDC patch 放入 `$HOME/.dsh-demo/profiles/web/cordis.patch.yml`。只设置环境变量不会开启认证。代理位于另一台机器，因此 DSH 要绑定具体的内网 IP，不能只监听 127.0.0.1。

本例浏览器到 DSH 的链路使用 HTTP，会话 Cookie 不带 Secure，链路没有 TLS 加密；Authing issuer 仍使用 HTTPS。后端应限制为代理可访问的网络。

### 10.5 从实际域名进入登录页

打开 `http://demo.dsh.cavacn.com/`，DSH 会自动跳到 Authing。配置正确时，页面只提供用户名密码登录，没有注册入口。输入用户名 `dsh-owner` 和示例密码 `Abc123456`，点击“登录”。

![从 demo.dsh.cavacn.com 实际跳转到 Authing，用户名为 dsh-owner，无注册入口](/images/dsh-oidc/25-authing-real-login.png)

登录成功后，浏览器经回调返回 `http://demo.dsh.cavacn.com/`，加载 DSH 首页。接下来检查页面、API 和 WebSocket 是否正常。

首次进入 DSH，点击预览说明中的“Continue”；新数据目录没有模型凭据，会出现“Get started”，可关闭后先查看首页，或按提示添加自己的模型 API Key。这是模型配置，与 Authing 登录分别设置。

![使用 dsh-owner 与手动设置密码完成 OIDC 登录后的 DSH 首页](/images/dsh-oidc/26-dsh-login-success.png)

可以在浏览器开发者工具的 Network 面板中检查请求：`/api/session/modelCatalog`、`/api/settings/describe`、`/api/llm/listProviders` 等接口应返回 200。添加模型凭据后，再发送一条消息，验证模型调用是否正常。

## 第 11 步：验证只有自己能用

逐项检查下面的结果，再将这个部署作为日常入口：

- 新的无痕窗口访问 DSH，先进入 Authing 登录，不能直接读取会话。
- 本人的 `dsh-owner` 登录后，能够进入 DSH 并正常发起会话。
- Authing 的“禁止注册”已开启；登录页如仍能进入注册流程，使用未注册的测试身份也应被拒绝创建。不要仅根据按钮是否消失判断。
- 应用默认权限为“拒绝所有用户访问”，只有本人用户有显式有效授权。
- 为验证拒绝规则，可由管理员临时创建一个不授予应用访问权的测试用户。用另一无痕会话以它登录，应在 Authing 被拒绝，不能进入 DSH；验证后清理这个测试用户。
- HTTP 域名能够正常加载页面、连接 WebSocket、收发消息；不需要带启动 token 的链接。

最后一个容易忽略的细节：**退出 Authing 不会撤销已经签发的 DSH 会话 Cookie。** DSH 的 Cookie 默认有效期仍为 30 天。要结束当前浏览器的 DSH 访问，需要清除 DSH 域名的站点 Cookie；清理后 Authing 的 SSO 会话仍可能使浏览器自动登录，需要时也退出 Authing。

在 Authing 撤销某个用户的应用授权，同样不能当作对既有 DSH Cookie 的即时撤销。不要把 Authing 的“强制下线”等操作理解为已同步结束所有 DSH 会话。

## 常见问题：按症状检查

| 症状 | 优先检查 |
| --- | --- |
| `authing.cnauthing.cn` 无法打开 | 尝试从 `https://console.authing.cn/` 进入；应用 issuer 应使用自己应用的 discovery 值 |
| 控制台能登录，DSH 登录提示用户不存在 | 控制台管理员和用户池用户不同；检查是否在正确用户池创建了 `dsh-owner` |
| Authing 拒绝回调 URL | 比对协议、主机、端口、完整路径，尤其是 `localhost` 与 `127.0.0.1` |
| 本人也被拒绝访问 | 检查应用中显式授权的用户 ID，以及授权“是否生效” |
| 启动时 OIDC discovery 失败 | 检查 issuer 是否来自 discovery、HTTPS 和网络是否可用、环境变量是否在当前进程存在 |
| `token-response` / `invalid_client` | 检查 App ID、完整 App Secret，以及认证方式是否为 `client_secret_post` |
| `code-exchange` / `OAUTH_UNSUPPORTED_OPERATION` | 优先检查 ID token 是否为 `RS256`，该错误也可能对应其他不支持的操作 |
| `login-cookie` | 从同一 DSH 入口重新登录；不要复用重启前或过期的回调页面 |
| `invalid_grant` | 授权码可能已经使用或过期；重新从 `/auth/oidc/login` 开始，核对回调与 PKCE 设置 |
| 域名能打开，API 返回 403 | 检查 `--trusted-host`、patch 中的 `trustedHosts`，以及 Nginx 是否保留公开 Host |
| 页面正常，消息连接失败 | 检查代理是否转发 WebSocket 的 `Upgrade` 和 `Connection` 头 |
| 改了环境变量仍按旧配置登录 | 停止原进程，从包含新变量的终端或服务配置重新启动 DSH |

回调 URL 中可能有一次性授权码，排查时只分享脱敏后的错误阶段和错误码，不要复制完整回调链接、Cookie 或 Secret。每次重试都从 DSH 首页或 `/auth/oidc/login` 开始。

## 参考资料

- [DeepSeek Harness 仓库](https://github.com/maix-chat/deepseek-harness)
- [DSH OIDC 配置与排错](https://github.com/maix-chat/deepseek-harness/blob/ee5daa434a/packages/client/connection/README.zh.md#optional-oidc-login)
- [DSH 反向代理部署说明](https://github.com/maix-chat/deepseek-harness/blob/ee5daa434a/docs/user/guide/public-deployments.zh.md)
- [Authing：创建自建应用](https://docs.authing.cn/v2/guides/app-new/create-app/create-app.html)
- [Authing：配置 OIDC 协议](https://docs.authing.cn/v2/guides/federation/oidc.html)
- [Authing：登录控制](https://docs.authing.cn/v2/guides/app-new/create-app/login-control.html)
- [Authing：访问授权](https://docs.authing.cn/v2/guides/app-new/create-app/application-access-control.html)
- [Authing：用户目录配置项，包括禁止注册](https://docs.authing.cn/v2/guides/users/settings.html)
