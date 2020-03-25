<?php

use App\Models\Form;
use App\Models\Fieldset;
use App\Contracts\Factory;
use Illuminate\Support\Str;

class FormFactory implements Factory
{
    /**
     * @var string
     */
    protected $name;

    /**
     * @var \App\Models\Fieldset
     */
    protected $fieldset;

    /**
     * @var boolean
     */
    protected $collectsEmails = false;

    /**
     * @var boolean
     */
    protected $collectsIPs = false;

    /**
     * Create a new Form factory.
     * 
     * @return \App\Models\Form
     */
    public function create()
    {
        $overrides = [
            'collect_email_addresses' => $this->collectsEmails,
            'collect_ip_addresses'    => $this->collectsIPs,
        ];

        if ($this->name) {
            $overrides['name']   = $this->name;
            $overrides['handle'] = Str::snake($this->name);
            $overrides['slug']   = Str::slug($this->name);
        }

        $form = factory(Form::class)->create($overrides);

        return $form;
    }

    /**
     * Create a form with the given name.
     * 
     * @param  string  $name
     * @return \FormFactory
     */
    public function withName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Create a form with the given fieldset.
     * 
     * @param  \App\Models\Fieldset  $fieldset
     * @return \FormFactory
     */
    public function withFieldset(Fieldset $fieldset)
    {
        $this->fieldset = $fieldset;

        return $this;
    }

    public function thatCollectsEmails()
    {
        $this->collectsEmails = true;

        return $this;
    }

    public function thatDoesNotCollectEmails()
    {
        $this->collectsEmails = false;

        return $this;
    }

    public function thatCollectsIPs()
    {
        $this->collectsIPs = true;

        return $this;
    }

    public function thatDoesNotCollectIPs()
    {
        $this->collectsIPs = false;

        return $this;
    }
}