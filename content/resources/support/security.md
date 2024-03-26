
---
type: "page"
title: "Security"
subtitle: ""
draft: false
sidebar: true
---

{{< content-start  >}}

## Security information

The QGIS community takes security as a serious matter. We are aware that QGIS is deployed in sensitive environments. 

For these reasons, this is how QGIS project acts to respond to vulnerabilities and security matters. 


### What is a vulnerability in QGIS ? 

QGIS is a broad project with several different components, relying on a large base of external dependencies (GDAL, Proj, python libraries, Qt, etc..). 
Security issues in QGIS can arise in various scenarios, including, but not limited to, vulnerabilities in its dependencies (e.g., GDAL, Proj, Qt), issues within QGIS code itself, or through the misuse of its Python bindings. Here are the main categories:

#### Vulnerabilies of underlying libraries 

If you run a code scanner, most of the vulnerabilities are not concerning QGIS, but its dependencies. 
The version of the dependencies shipped with your QGIS depends on the OS and packaging system you use. 

**On Windows**, QGIS.org use OSGEO4W project to distribute a complete environment, and we fully maintain it.

OSGEO4W provides update scripts that can run silently, allowing you to upgrade only the necessary libraries without the need to redownload the entire package. For more information on setting up these scripts for your deployment, refer to the [OSGEO4W documentation](https://trac.osgeo.org/osgeo4w/).


On **[Ubuntu / Debian](/resources/installation-guide/#debianubuntu)**, we provide QGIS binaries and work closely with packagers of OSGEO libraries (GDAL / PROJ / GRASS).
For Python and Qt libraries, which rely on your operating system, please ensure they are updated regularly using your system's update manager. For Ubuntu/Debian, this typically involves using commands like `sudo apt-get update` and `sudo apt-get upgrade`.
Other packages are maintained by the community, such as Conda, FlatPak, etc.. Any issue should be raised to the dedicated maintainers.  

#### False positives

Receiving red flags from code scanner alerts can be alarming, but many of the current alerts are false positive, so keep calm and don't panic. 

For example, a common false positive might involve the PostgreSQL client library (libpq) being flagged for server-side vulnerabilities, which do not apply to QGIS's use case.

Read the CVE report, go to the upstream project CVE description and please verify this really concerns. 

Please also communicate these findings to your code scanner vendor for catalog updates, to let a chance this stops in the future. 

There is not much QGIS contributors can do when the classification of dependencies is not accurate in the CVE database.

### Vulnerabilities of QGIS itself

Those are extremely rare but can occur as in any software.

QGIS server is a more critical part than QGIS desktop, since it is exposed to the web on public servers. It has been assessed against SQL injections and various known leaks by big corporations since years now. 

If you believe you have found a security issue, such as vulnerabilities in QGIS or its dependencies, please refer to the [security page]({{< ref "resources/support/security" >}}) for detailed information on how to report it responsibly. Before this, please do the following
 - Check you are using the latest version of QGIS, and have a glance at the nighlty version for potential ongoing changes (fixes or regressions)
 - Check if your issue concerns QGIS desktop or QGIS server part
 - Please check our [Bug tracker](https://github.com/qgis/QGIS/issues) for an already existing and potential fix
 - then only, raise a private disclosure to the security teams via [our GitHub security page](https://github.com/qgis/QGIS/security). Please avoid publicly disclosing the vulnerability until it has been resolved to prevent potential exploitation.

#### Running python QGIS 

QGIS offers Python bindings so that you can extend it by writing plugins, geoprocessing models, actions, project macros, or even rewrite a full application based on PyQGIS. 

In a desktop environment, any scripting language has full access to the user land resources. If you execute blindly external code, it can do a lot of harm. 

QGIS main plugins repository is permissively open, but approval of plugins is still reviewed manually. We do not take advance QA assessment of plugin code. However we forbid to ship compiled code, so you know what you get and are free to audit the code. 


If your are working in a sensitive environment, we advise you to :

- Audit carefully the plugins you allow to your users, in a sandboxed environment
- Deploy your own plugin repository in which you control which plugin are available
- Take benefit of the advanced customization possibilities of QGIS to constraint settings around connections, authentication etc..
- Don't focus only on code breaches, but also on user behavior regarding credentials and the risk of leak in project files if users insist on using basic authentication.  
 

### Do we affect Common Vulnerabilities and Exposures (CVE) ?  

Currently, QGIS project is **not** a CVE Numbering Authority (CNA), so we don't affect CVE identifiers. 


### Security Process and workflow

Disclosures are discussed in a private dedicated repository.

Fixes are shipped as soon as possible - regarding the criticality of the issue - in point releases. 

If you want to secure your QGIS enterprise deployment, please ensure to be able to quickly deploy fixes on your machines. 

OSGEO4W provides update scripts that can run silently, allowing you to upgrade only the necessary libraries without the need to redownload the entire package. For more information on setting up these scripts for your deployment, refer to the [OSGEO4W documentation](https://trac.osgeo.org/osgeo4w/).



{{< content-end >}}
