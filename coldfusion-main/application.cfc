<cfcomponent>    
    <cfset this.name = "index"> 
    <cfset this.applicationTimeout = createTimeSpan(0, 0, 0, 60)> 
    <cfset this.sessionManagement = true> 
    <cfset this.sessionTimeout = createTimeSpan(0, 0, 2, 0)> 
    <cfset this.datasource = "demo">
    <cffunction name="onApplicationStart" returnType="void">
    </cffunction>

    <cffunction name="onSessionStart" returnType="boolean" output="false">
        <cfset session.formData = {}>
        <cfset session.formDataTask8={}>
        <cfset session.formDataTask9={}>
        <cfset session.formDataTask10={}>
        <cfset session.captchaText = RandRange(1000, 9999)>
        <cfset session.login = false>
        <cfreturn true>
    </cffunction>    
</cfcomponent>