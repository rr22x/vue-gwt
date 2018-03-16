# Eclipse

## ✅ Vue GWT Eclipse Plugin

First, install the [Vue GWT Eclipse Plugin](https://marketplace.eclipse.org/content/vue-gwt).
This will make Eclipse re-process your Components templates when you save them.

To install, just drag and drop the following button on your Eclipse window:

[![Drag to your running Eclipse* workspace. *Requires Eclipse Marketplace Client](https://marketplace.eclipse.org/sites/all/themes/solstice/public/images/marketplace/btn-install.png)](http://marketplace.eclipse.org/marketplace-client-intro?mpc_install=3923910 "Drag to your running Eclipse* workspace. *Requires Eclipse Marketplace Client")

## ✅ Make Eclipse find your Templates

Eclipse will filter your template files in `src/main/java` (which will throw an error that your templates cannot be found).

To fix this, right click on your project then select: `Properties > Maven`.
In `Active Maven profiles` add `!vue-gwt-resources`.

![Setting Maven Profile for Eclipse](https://axellience.github.io/vue-gwt/resources/images/eclipse-set-maven-profile.png)

## ✅ Annotation Processing

We then need to enable Annotation Processing on Eclipse.
First install the `m2e-apt` plugin:
[https://marketplace.eclipse.org/content/m2e-apt](https://marketplace.eclipse.org/content/m2e-apt).
 
Then you need to add the following to your `pom.xml`:

```xml
<pluginManagement>
    <plugins>
        <plugin>
            <groupId>org.eclipse.m2e</groupId>
            <artifactId>lifecycle-mapping</artifactId>
            <version>1.0.0</version>
            <configuration>
                <lifecycleMappingMetadata>
                    <pluginExecutions>
                        <pluginExecution>
                            <pluginExecutionFilter>
                                <groupId>
                                    org.codehaus.mojo
                                </groupId>
                                <artifactId>
                                    gwt-maven-plugin
                                </artifactId>
                                <versionRange>
                                    [2.7.0,)
                                </versionRange>
                                <goals>
                                    <goal>compile</goal>
                                </goals>
                            </pluginExecutionFilter>
                            <action>
                                <ignore></ignore>
                            </action>
                        </pluginExecution>
                    </pluginExecutions>
                </lifecycleMappingMetadata>
            </configuration>
        </plugin>
    </plugins>
</pluginManagement>
```

Once this is done, you need to enable annotation processing for your project in the `m2e-apt` project settings:

![Enabling Annotation processing in Eclipse](https://axellience.github.io/vue-gwt/resources/images/eclipse-enable-annotation-processing.png)

